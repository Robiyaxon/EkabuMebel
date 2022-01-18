import { render, screen } from '@testing-library/react';
import App from './App';
describe("App", ()=>{
  it("render app compnent", ()=>{
    render(<App/>);
    expect( screen.getByText(/image/i)).toHaveClass("App");
    });
})
