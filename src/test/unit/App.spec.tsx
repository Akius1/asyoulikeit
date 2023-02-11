import {render, screen, fireEvent} from "@testing-library/react";
import Toggle from "../../Components/Toggle";


describe('Smoke Test', ()=>{
    it('can handle the truth', ()=>{
        expect(true).toEqual(true);
    });
});

describe('<Toggle />', ()=>{
    it("should render OFF by default", () => {
        render(<Toggle />);

        expect(screen.getByText(/OFF/)).toBeIntheDocument();
    })
})