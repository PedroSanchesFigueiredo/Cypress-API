/// <reference types="cypress" />

describe('Criando uma atividade', () => {
  it.only('Enviar corpo de resposta na requisição', () => {
    const responseBody = {
      id: 9999,
      title: 'As aventuras de PP',
      dueDate: '2023-07-07T17:51:15.137Z',
      completed: true
    };

    cy.request('POST', 'https://fakerestapi.azurewebsites.net/api/v1/Activities', { body: responseBody })
      .then((response) => {
        // Realizar asserções nos dados da resposta
        expect(response.status).to.equal(200);
        // Faça asserções adicionais conforme necessário
        expect(responseBody).to.deep.equal({
          id: 9999,
          title: 'As aventuras de PP',
          dueDate: '2023-07-07T17:51:15.137Z',
          completed: true

        });
      });

    it('Validar livro criado', () => {
      cy.request('GET', 'https://fakerestapi.azurewebsites.net/api/v1/Activities')
        .then((response) => {
          // Realizar asserções no corpo da resposta
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an('array').that.is.not.empty;

          const activity = response.body[0];
          expect(activity).to.have.property('id');
          expect(activity).to.have.property('title')
          expect(activity).to.have.property('dueDate')
        });
    });

    it('Validar se o campo "id" existe na resposta da API', () => {
      cy.request('GET', 'https://fakerestapi.azurewebsites.net/api/v1/Activities')
        .then((response) => {
          // Realizar asserções no corpo da resposta
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an('array').that.is.not.empty;

          const activity = response.body[0];
          expect(activity).to.have.property('id');
          expect(activity).to.have.property('title')
          expect(activity).to.have.property('dueDate')
        });
    })
  })
})