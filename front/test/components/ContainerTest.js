import { renderComponent, expect } from '../TestHelper';
import Container from '../../src/components/Container';
import css from '../../src/components/style.css';

// Use 'describe' to group together similar tests
describe('Container' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Container);
  });

  it('show table inside Container', () => {
    expect(component.find('.table')).to.exist;
  });

  it('shows chart inside Container', () => {
    expect(component.find('.chartjs')).to.exist;
  });
});
