
 describe('Тестирование qustudio', function () {
    it('проверка на восстановление пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click();

         cy.get('#mailForgot').type('Romario@yandex.ru');
         cy.get('#restoreEmailButton').click();
         cy.contains('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon')
     })
 })