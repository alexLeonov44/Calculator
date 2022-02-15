it('visits the app', () => {
  cy.visit('/')
})

describe('Home page common tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('it check dispaly ', () => {
    cy.get('#dispaly-result').should('exist')
    cy.get('#dispaly-result').should('have.text', '0')
  })

  it('it check key klicking ', () => {
    cy.contains('1').click()
    cy.get('#dispaly-result').should('have.text', '1')
  })
})

describe('Header test', () => {
  it('it check header exist  ', () => {
    cy.get('#header').should('exist')
    cy.get('#header').should(
      'have.css',
      'background-color',
      'rgb(255, 229, 229)',
    )
    cy.get('#header div:first-of-type').should(
      'have.text',
      'Calculator App',
    )
  })

  it('it check header buttons  ', () => {
    cy.contains('Home').should('exist')
    cy.contains('Settings').should('exist')

    cy.contains('Settings').click()
    cy.get('#controll-panel').should('not.exist')
    cy.get('#setting-component').should('exist')
    cy.contains('Home').click()
    cy.get('#controll-panel').should('exist')
  })
})

describe('Controlll panel test', () => {
  it('it check dispaly and keypad exist ', () => {
    cy.get('#dispaly-result').should('exist')
    cy.get('#dispaly-result').should('have.text', '1')
    cy.get('#keyPad').should('exist')
  })

  it('it check key clicking and checking result ', () => {
    cy.contains('span', 'C').click()
    cy.contains('.key-button', '1').click()
    cy.contains('.key-button', '+').click()
    cy.contains('.key-button', '5').click()
    cy.contains('.key-button', '=').click()
    cy.get('#dispaly-result').should('have.text', '6')

    cy.contains('CE').click()
    cy.get('#dispaly-result').should('have.text', '0')

    cy.contains('.key-button', '1').click()
    cy.contains('.key-button', '4').click()
    cy.contains('.key-button', '7').click()
    cy.contains('.key-button', '/').click()
    cy.contains('.key-button', '3').click()
    cy.get('#dispaly-result').should('have.text', '147/3')

    cy.contains('span', 'C').click()
    cy.get('#dispaly-result').should('have.text', '0')
  })
})

describe('History test', () => {
  it('it check history exist ', () => {
    cy.get('#history').should('exist')
    cy.get('#history div p').should('have.length', 1)
  })

  it('add to history mathematical expressions and check length', () => {
    cy.contains('.key-button', '1').click()
    cy.contains('.key-button', '0').click()
    cy.contains('.key-button', '-').click()
    cy.contains('.key-button', '5').click()
    cy.contains('.key-button', '=').click()
    cy.get('#dispaly-result').should('have.text', '5')

    cy.contains('span', 'C').click()
    cy.get('#dispaly-result').should('have.text', '0')

    cy.contains('.key-button', '2').click()
    cy.contains('.key-button', '5').click()
    cy.contains('.key-button', '0').click()
    cy.contains('.key-button', '/').click()
    cy.contains('.key-button', '8').click()
    cy.contains('.key-button', '=').click()
    cy.get('#dispaly-result').should('have.text', '31.25')

    cy.contains('.key-button', '2').click()
    cy.contains('.key-button', '5').click()
    cy.contains('.key-button', '+').click()
    cy.contains('.key-button', '4').click()
    cy.contains('.key-button', '=').click()
    cy.get('#dispaly-result').should('have.text', '29')

    cy.get('#history div p').should('have.length', 4)
  })

  it('delete histoty and check length ', () => {
    cy.contains('Settings').click()
    cy.contains('Clear All History').click()
    cy.contains('Home').click()
    cy.get('#history div p').should('have.length', 0)
  })
})

describe('change theme and check color 0f header', () => {
  it('go to setting and select Dark theme', () => {
    cy.contains('Settings').click()
    cy.get('#theme-drop-down-btn').should('exist')
    cy.get('#theme-drop-down-btn').click()
    cy.contains('Dark')
      .should('exist')
      .click()
    cy.get('#header').should(
      'have.css',
      'background-color',
      'rgb(67, 67, 67)',
    )
  })

  it('go to setting and select Light theme', () => {
    cy.get('#theme-drop-down-btn').should('exist')
    cy.get('#theme-drop-down-btn').click()
    cy.contains('Light')
      .should('exist')
      .click()
    cy.get('#header').should(
      'have.css',
      'background-color',
      'rgb(229, 229, 229)',
    )
     cy.contains('Home').click()
  })
})

describe('check dropdown uotside click', () => {
  it('go to setting and open drop down', () => {
    cy.contains('Settings').click()
    cy.get('#theme-drop-down-btn').should('exist')
    cy.get('#theme-drop-down-btn').click()
   
    cy.get('#theme-drop-down-content').should('exist')
      
  })
  
  it('close dropdown on outside setting component click', () => { 
    cy.get('#setting-component').should('exist').click()
      cy.get('#theme-drop-down-content').should('not.be.visible')
  
  })

  it('close dropdown on outside headerclick', () => {
    cy.get('#theme-drop-down-btn').click()
    cy.get('#header').should('exist').click()
    cy.get('#theme-drop-down-content').should('not.be.visible')

    cy.contains('Home').click()
})
})
