const { test, expect } = require('@playwright/test')
const AddNewPetRequestBody = require('../tests/fixtures/TestDataAPI.json');

test('Caso 1: Registrar una nueva mascota con API Method POST', async ({ request }) => {

    const postAPIresponse = await request.post('https://petstore.swagger.io/v2/pet', {
        data: AddNewPetRequestBody
    })

    //Validar codigo status 200
    expect(postAPIresponse.status()).toBe(200);

    const postAPIResponseBody = await postAPIresponse.json();
    console.log(postAPIResponseBody);

    //Validar JSON body response
    expect(postAPIResponseBody).toHaveProperty("id", AddNewPetRequestBody.id);
    expect(postAPIResponseBody.category).toHaveProperty("id", AddNewPetRequestBody.category.id);
    expect(postAPIResponseBody.category).toHaveProperty("name", AddNewPetRequestBody.category.name);
    expect(postAPIResponseBody).toHaveProperty("name", AddNewPetRequestBody.name);
    expect(postAPIResponseBody).toHaveProperty("photoUrls[0]", AddNewPetRequestBody.photoUrls[0]);
    expect(postAPIResponseBody.tags[0]).toHaveProperty("id", AddNewPetRequestBody.tags[0].id);
    expect(postAPIResponseBody.tags[0]).toHaveProperty("name", AddNewPetRequestBody.tags[0].name);
    expect(postAPIResponseBody).toHaveProperty("status", AddNewPetRequestBody.status);
});

test('Caso 2: Consultar mascota por ID con API Method GET', async ({ request }) => {

    await request.post('https://petstore.swagger.io/v2/pet', {
        data: AddNewPetRequestBody
    })

    const getAPIresponse = await request.get("https://petstore.swagger.io/v2/pet/23", {
    })

    //Validar codigo status 200
    expect(getAPIresponse.status()).toBe(200);

    const getAPIResponseBody = await getAPIresponse.json();
    console.log(getAPIResponseBody);

    //Validar JSON body response
    expect(getAPIResponseBody).toHaveProperty("id", AddNewPetRequestBody.id);
    expect(getAPIResponseBody.category).toHaveProperty("id", AddNewPetRequestBody.category.id);
    expect(getAPIResponseBody.category).toHaveProperty("name", AddNewPetRequestBody.category.name);
    expect(getAPIResponseBody).toHaveProperty("name", AddNewPetRequestBody.name);
    expect(getAPIResponseBody).toHaveProperty("photoUrls[0]", AddNewPetRequestBody.photoUrls[0]);
    expect(getAPIResponseBody.tags[0]).toHaveProperty("id", AddNewPetRequestBody.tags[0].id);
    expect(getAPIResponseBody.tags[0]).toHaveProperty("name", AddNewPetRequestBody.tags[0].name);
    expect(getAPIResponseBody).toHaveProperty("status", AddNewPetRequestBody.status);
});