Unit testing is done using Jest and complimented by the Enzyme utility to help traverse and make assertions on the tested component.

### How to write Jest unit tests

Tests should focus solely on input/output of the component; not on the inner implementation of the component. Setup/tests should only reference the _inputs_and assertions should only check the \_outputs_.

- Input Types
  1.  Static Props
  2.  Events generated by the user
  3.  A child component calling a passed-in function
- Output Types
  1.  The presence of a child component
  2.  a call to function prop, like a Redux action creator
  3.  Values passed into child component props

### Best Practices

#### PropTypes Validation

Ensuring that you have propTypes validation on each of your components is crucial. Validating PropTypes in the component completely eliminates the need to test props in your unit tests. This will keep your unit test small and concise.

#### Prompting Questions

You should be asking yourself a few different things when testing your components:

1.  What does my component render?
2.  Does a child component receive any props?
3.  Does my component render different things under different circumstances?
4.  When i pass a function as a prop, what does my component use it for? Does it call it, or just give it to another component? If it calls it, what does it call it with?
5.  When the user interacts with my component, what happens?

#### Rules of Thumb

- You **should not** test props if you have already included prop-types validation inside of the component
- You **should not** test in-line styles **UNLESS** they can change at runtime.
- You **should only** be testing what the component is concerned with
- You **should** be testing the components that render and the props they receive.
- You **should not** be testing things that aren't the concern of your component

### Examples

```jsx static
import React from "react";
import Button from "./index";
import { MemoryRouter } from "react-router"; // need to use to input context into mounted component

const props = {
  styleName: "primary",
  disabled: false,
  kind: "primary",
  action: null,
  label: "i am a button"
};

// test full snapshot
describe("<Button />", () => {
  it("should render correctly", () => {
    // user helper function defined in index.jest.js
    const wrapper = shallowWrapper(Button)(props);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render as a button with a type of button", () => {
    const wrapper = shallowWrapper(Button)({ ...props, type: "button" });
    expect(wrapper.type()).toEqual("button");
    expect(wrapper.find('[type="button"]')).toHaveLength(1);
  });

  it("should render as link", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Button {...props} type="link" to="this/is/a/route" />
      </MemoryRouter>
    );
    expect(wrapper.find("a").exists());
  });

  it("should render as a button with a type of submit", () => {
    const wrapper = shallowWrapper(Button)({ ...props, type: "submit" });
    expect(wrapper.find('[type="submit"]')).toHaveLength(1);
  });
});
```
