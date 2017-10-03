import { renderComponent, expect } from '../TestHelper';
import HeaderPanel from '../../src/components/HeaderPanel';
import css from '../../src/components/style.css';

// Use 'describe' to group together similar tests
describe('HeaderPanel' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(HeaderPanel);
  });

  it('has a container inside HeaderPanel', () => {
    expect(component.find('.container')).to.exist;
  });

  it('shows all inputs and the button in the form', () => {
    expect(component.find('#name')).to.exist;
    expect(component.find('#lastName')).to.exist;
    expect(component.find('#participation')).to.exist;
    expect(component.find('#sendButton')).to.exist;
  });
});
