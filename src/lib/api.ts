type Send = Promise<{
  error?: string
  success?: string
  user?: { username: string }
}>

export const send = async (form: HTMLFormElement): Send => {
  const formdata = new FormData(form)
  console.log(form)
  
  for (const pair of formdata.entries()) {
    console.log(pair)
  }

  // Get variables from formData to body
  // const response = await fetch(form.action, {
  //   method: form.method,
  //   body: 
  //   headers: {accept: 'application/json' }
  // })

  // return await response.json()
}