export const enhance = (form: HTMLFormElement, { result }) => {
  const submitHandler = async (event: Event) => {
    event.preventDefault();

    try {
      const body = new FormData(form);
      const res = await fetch(form.action, {
        method: form.method,
        headers: {
          accept: "application/json",
        },
        body,
      });

      if (res.ok) console.log(await res.json());
    } catch (error) {
      console.error(error);
    }
  };

  form.addEventListener("submit", submitHandler);

  return {
    destroy() {
      form.removeEventListener("submit", submitHandler);
    },
  };
};
