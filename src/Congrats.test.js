import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Congrats from './Congrats';
import checkpropTypes from 'check-prop-types';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = {success: false};

const setup = (props={}) => {
    const updatedProps = {...defaultProps, ...props};
    return shallow(<Congrats {...updatedProps} />);
}

test('renders without error', () => {
    //const wrapper = shallow(<Congrats />);
    const wrapper = setup();
    expect(wrapper.length).toBe(1);
});

test('renders no text when success prop is false', () => {
    //const wrapper = shallow(<Congrats success={false} />);
    const wrapper = setup({success: false});
    const comp = wrapper.find('[data-test="components-congrats"]');
    expect(comp.text()).toBe('');
});

test('renders msg when success prop is true', () => {
    // const wrapper = shallow(<Congrats success={true} />);
    const wrapper = setup({success: true});
    const comp = wrapper.find('[data-test="congrats-message"]');
    expect(comp.length).toBe(1);
});

test('does not throw warning with expected props', () => {
    const expectedProps = {success: true};
    const propError = checkpropTypes(Congrats.propTypes, expectedProps, "prop", Congrats.name);
    expect(propError).toBeUndefined();
});
