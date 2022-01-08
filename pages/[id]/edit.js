import { useState, useEffect } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Button, Form, Loader } from "semantic-ui-react";
import { useRouter } from "next/router";

const baseUrl = process.env.BASE_URL;
const EditNote = ({ note }) => {
  const [form, setForm] = useState({
    title: note.title,
    description: note.description,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        UpdateNote();
        // alert("submited");
        console.log("success");
      } else {
        setIsSubmitting(false);
      }
    }
    //eslint-disable-next-line
  }, [errors]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let err = validate();
    setErrors(err);

    setIsSubmitting(true);
  };

  const UpdateNote = async () => {
    try {
      // ! production
<<<<<<< HEAD
      const res = await fetch(
        `http://localhost:3000/api/notes/${router.query.id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
=======
      const res = await fetch(`${baseUrl}/api/notes/${router.query.id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(form),
      });
>>>>>>> main

      router.push("/");

      // !Local
      // const res = await fetch(
      //   `http://localhost:3000/api/notes/${router.query.id}`,
      //   {
      //     method: "PUT",
      //     headers: {
      //       Accept: "application/json",
      //       "content-type": "application/json",
      //     },
      //     body: JSON.stringify(form),
      //   }
      // );

      // router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const validate = () => {
    let err = {};

    if (!form.title) {
      err.title = "title is required";
    }
    if (!form.description) {
      err.description = "Description is required";
    }

    return err;
  };
  return (
    <div className='form-container'>
      <h1>Update Note</h1>
      <div>
        {isSubmitting ? (
          <Loader active inline='centered' />
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Input
              fluid
              error={
                errors.title
                  ? { content: "please enter a title", pointing: "below" }
                  : null
              }
              label='title'
              placeholder='title'
              name='title'
              onChange={handleChange}
              value={form.title}
            />
            <Form.TextArea
              fluid
              error={
                errors.title
                  ? { content: "please enter a description", pointing: "below" }
                  : null
              }
              placeholder='description'
              label='placeholder'
              name='description'
              onChange={handleChange}
              value={form.description}
            />
            <Button type='submit'>Update</Button>
          </Form>
        )}
      </div>
    </div>
  );
};

EditNote.getInitialProps = async ({ query: { id } }) => {
<<<<<<< HEAD
  const res = await fetch(`http://localhost:3000/api/notes/${id}`);
=======
  const res = await fetch(`${baseUrl}/api/notes/${id}`);
>>>>>>> main
  const { data } = await res.json();

  return { note: data };
};

export default EditNote;
