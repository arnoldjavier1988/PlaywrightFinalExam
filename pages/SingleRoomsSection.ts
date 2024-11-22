import { Page, Locator } from "@playwright/test"
import { DatosUsuario } from "../tests/fixtures/TestData.json"

export default class SingleRoomsSection {

    readonly page: Page;
    readonly BookThisRoomButton: Locator;
    readonly Day27CalendarOption: Locator;
    readonly Day29CalendarOption: Locator;
    readonly FirstNameInput: Locator;
    readonly LastNameInput: Locator;
    readonly EmailInput: Locator;
    readonly PhoneInput: Locator;
    readonly BookButton: Locator;
    readonly MustNotBeNullLabel: Locator;


    constructor(page: Page) {
        this.page = page;
        this.BookThisRoomButton = page.locator('.col-sm-7 > .btn').first()
        this.Day27CalendarOption = page.getByRole('cell', { name: '27' }).nth(3)
        this.Day29CalendarOption = page.getByRole('cell', { name: '29' }).nth(3)
        this.FirstNameInput = page.getByPlaceholder('Firstname')
        this.LastNameInput = page.getByPlaceholder('Lastname')
        this.EmailInput = page.locator('input[name="email"]')
        this.PhoneInput = page.locator('input[name="phone"]')
        this.BookButton = page.getByRole('button', { name: 'Book', exact: true })
        this.MustNotBeNullLabel = page.getByText(DatosUsuario.ErrorMessage)
    }
}