describe('Test task for Global Team', () => {
  const userEmail = 'qatest.hotel@gmail.com'
  const userPassword = 'Pa$$word123'

  beforeEach(() => {
    cy.visit('https://dou.ua')
  })

  it('Login user and update their skills', () => {
    cy.get('#login-link').contains('Вхід і реєстрація').click()
    cy.get('#_loginByMail').contains('за поштою').click()
    cy.get('.head > .title').contains('Вхід по пошті')
    cy.get('.login > .b-form > .form-section > :nth-child(2) > :nth-child(2) > .input > .first').type(`${userEmail}`)
    cy.get('.txtPassword').type(`${userPassword}`)
    cy.get('.login > .b-form > .button-section > .row > :nth-child(2) > .big-button').contains('Увійти').click()
    cy.get('.min-profile > .g-avatar').should('exist').click()
    cy.get(':nth-child(4) > .wrap > a').click()
    cy.get('h1').contains('Редагування профілю').should('exist')
    cy.get('#txtSkill').clear().type('Test Automation')
    cy.get('#btnSubmit').contains('Зберегти').click()
    cy.get('.label').contains('Навички').should('exist')
    cy.get('.user_skills > p').contains('Test Automation').should('exist')
  })
})
