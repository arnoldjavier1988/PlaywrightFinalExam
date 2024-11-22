import { test, expect } from '@playwright/test';
import SingleRoomsSection from "../pages/SingleRoomsSection"
import ContactUsSection from "../pages/ContactUsSection"
import { DatosUsuario } from "./fixtures/TestData.json"

let singleroomssection: SingleRoomsSection;
let contactussection: ContactUsSection;

test.beforeEach(async ({ page }) => {
  //Given que el usuario accede a la pagina https://automationintesting.online/
  await page.goto('https://automationintesting.online/');
})

test('Caso 1: Probar el proceso de reserva de una habitación', async ({ page }) => {

  singleroomssection = new SingleRoomsSection(page);

  //When hace click en el boton "Book this room" de la seccion Single
  await singleroomssection.BookThisRoomButton.click();

  //And selecciona los dias 26 y 29 de noviembre
  await singleroomssection.Day27CalendarOption.click();
  await singleroomssection.Day29CalendarOption.click();

  //And digita sus nombres, apellidos, correo electronico y numero de telefono
  await singleroomssection.FirstNameInput.click();
  await singleroomssection.FirstNameInput.fill(DatosUsuario.FirstName);
  await singleroomssection.LastNameInput.click();
  await singleroomssection.LastNameInput.fill(DatosUsuario.LastName);
  await singleroomssection.EmailInput.click();
  await singleroomssection.EmailInput.fill(DatosUsuario.Email);
  await singleroomssection.PhoneInput.click();
  await singleroomssection.PhoneInput.fill(DatosUsuario.Phone);

  //And hace click en el boton "Book"
  await singleroomssection.BookButton.click();

  //Then se muestra el mensaje de error "must not be null"
  await expect(singleroomssection.MustNotBeNullLabel).toBeVisible();
  await expect(singleroomssection.MustNotBeNullLabel).toHaveText(DatosUsuario.ErrorMessage);

});

test('Caso 2: Probar la funcionalidad de contacto con soporte', async ({ page }) => {

  contactussection = new ContactUsSection(page);

  //When ingresa los datos del formulario (nombre, email, telefono, titulo y mensaje) de la seccion Contactenos
  await contactussection.NameInput.click();
  await contactussection.NameInput.fill(DatosUsuario.FullName);
  await contactussection.EmailInput.click();
  await contactussection.EmailInput.fill(DatosUsuario.Email);
  await contactussection.PhoneInput.click();
  await contactussection.PhoneInput.fill(DatosUsuario.Phone);
  await contactussection.SubjectInput.click();
  await contactussection.SubjectInput.fill(DatosUsuario.Subject);
  await contactussection.MessageInput.click();
  await contactussection.MessageInput.fill(DatosUsuario.Message);

  //And hace click en el boton "Submit"
  await contactussection.SubmitButton.click();

  //Then se muestra mensaje de formulario enviado correctamente
  await expect(contactussection.SuccessMessage).toBeVisible();
  await expect(contactussection.SuccessMessage).toHaveText(DatosUsuario.SuccessMessage.FirstPart + DatosUsuario.FullName +
    DatosUsuario.SuccessMessage.SecondPart + DatosUsuario.Subject + DatosUsuario.SuccessMessage.ThirdPart);

});