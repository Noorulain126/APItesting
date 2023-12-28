describe('HTTP Requests', () => {

  it('Get function', () => {
    cy.request({
      method: 'GET',
      url: 'https://httpbin.org/get'
    }).then(function(response) {
      expect(response.body).to.have.property('url');
    });
  });

  it('Post', () => {
    cy.request({
      method: 'POST',
      url: 'https://httpbin.org/post',
      body: {
        'name': 'Pramod',
        'age': 27
      },
      headers: {
        'content-type': 'application/json'
      }
    }).then(function(response) {
      expect(response.body).to.have.property('json');
      expect(response.body.json).to.deep.equal({
        'name': 'Pramod',
        'age': 27
      });
    });
  });

  it('Put Request', function() {
    cy.request({
      method: 'PUT',
      url: 'https://httpbin.org/put',
      body: {
        'name': 'Pramod'
      }
    }).then((response) => {
      expect(response.body).to.have.property('json');
      expect(response.body.json).to.deep.equal({
        'name': 'Pramod'
      });
    });
  });

  it('Patch Request', function() {
    cy.request({
      method: 'PATCH',
      url: 'https://httpbin.org/patch',
      body: {
        'name': 'Pramod'
      }
    }).then((response) => {
      expect(response.body).to.have.property('json');
      expect(response.body.json).to.deep.equal({
        'name': 'Pramod'
      });
    });
  });

});