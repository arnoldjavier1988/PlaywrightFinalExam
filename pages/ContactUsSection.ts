import { Page, Locator } from "@playwright/test"
import { DatosUsuario } from "../tests/fixtures/TestData.json"

export default class ContactUsSection {

    readonly page: Page;
    readonly NameInput: Locator;
    readonly EmailInput: Locator;
    readonly PhoneInput: Locator;
    readonly SubjectInput: Locator;
    readonly MessageInput: Locator;
    readonly SubmitButton: Locator;
    readonly SuccessMessage: Locator;


    constructor(page: Page) {
        this.page = page;
        this.NameInput = page.getByTestId('ContactName')
        this.EmailInput = page.getByTestId('ContactEmail')
        this.PhoneInput = page.getByTestId('ContactPhone')
        this.SubjectInput = page.getByTestId('ContactSubject')
        this.MessageInput = page.getByTestId('ContactDescription')
        this.SubmitButton = page.getByRole('button', { name: 'Submit' })
        this.SuccessMessage = page.getByText(DatosUsuario.SuccessMessage.FirstPart + DatosUsuario.FullName + "!\We'll get back to you")
    }
}