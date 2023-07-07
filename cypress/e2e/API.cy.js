/// <reference types="cypress" />

describe('API Test SP', () => {
  it('Should validate the response body', () => {
    cy.request('GET', '')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('Objeto').to.be.an('array')
        
        const [inscricao] = response.body.Objeto
        expect(inscricao).to.have.property('Inscricao')
        expect(inscricao).to.have.property('SituacaoInscricao')
        expect(inscricao).to.have.property('DataInscricao')
        expect(inscricao).to.have.property('DataAlteracao')
        expect(inscricao).to.have.property('PagamentoSituacao')
        expect(inscricao).to.have.property('FichaInscricao')
      })
  })
})

describe('API Test MG', () => {
  it('Should validate the response body', () => {
    cy.request('GET', '')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('Objeto').to.be.an('array')
        
        const [inscricao] = response.body.Objeto
        expect(inscricao).to.have.property('Inscricao')
        expect(inscricao).to.have.property('SituacaoInscricao')
        expect(inscricao).to.have.property('DataInscricao')
        expect(inscricao).to.have.property('DataAlteracao')
        expect(inscricao).to.have.property('PagamentoSituacao')
        expect(inscricao).to.have.property('FichaInscricao')
      })
  })
})


describe('API Test Sul', () => {
  it('Should validate the response body', () => {
    cy.request('GET', '')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('Objeto').to.be.an('array')
        
        const [inscricao] = response.body.Objeto
        expect(inscricao).to.have.property('Inscricao')
        expect(inscricao).to.have.property('SituacaoInscricao')
        expect(inscricao).to.have.property('DataInscricao')
        expect(inscricao).to.have.property('DataAlteracao')
        expect(inscricao).to.have.property('PagamentoSituacao')
        expect(inscricao).to.have.property('FichaInscricao')
      })
  })
})

describe('API Test Nordeste', () => {
  it('Should validate the response body', () => {
    cy.request('GET', '')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('Objeto').to.be.an('array')
        
        const [inscricao] = response.body.Objeto
        expect(inscricao).to.have.property('Inscricao')
        expect(inscricao).to.have.property('SituacaoInscricao')
        expect(inscricao).to.have.property('DataInscricao')
        expect(inscricao).to.have.property('DataAlteracao')
        expect(inscricao).to.have.property('PagamentoSituacao')
        expect(inscricao).to.have.property('FichaInscricao')
      })
  })
})