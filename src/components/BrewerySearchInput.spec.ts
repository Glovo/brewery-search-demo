describe('BrewerySearchInput', () => {
  it('should render a search input with default placeholder', () => {});

  it('should render a submit button with default text', () => {});

  describe('when typing', () => {
    it('should fetch auto-complete items when text is not emtpy', () => {});

    it('should emit `error` event with the error as parameter when auto-complete API response is failure', () => {});

    it('should not fetch auto-complete items when text is empty', () => {});

    it('should emit `search` event with the clicked auto-complete item name as parameter', () => {});
  });

  describe('when form is submitted', () => {
    it('should emit the `search` event with current search input when the form is submitted', () => {});

    it('should clear the search input when the form is submitted', () => {});
  })
});
