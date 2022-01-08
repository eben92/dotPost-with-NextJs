import { useState, useEffect } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Button, Form, Loader } from "semantic-ui-react";
import { useRouter } from "next/router";

const baseUrl = process.env.BASE_URL;
const Create = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        createNote();
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

  const createNote = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/notes`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(form),
      });

      router.push("/");
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
    if (!form.link1) {
      err.description = "Description is required";
    }
    // if (!form.link2) {
    //   err.description = "Description is required";
    // }
    // if (!form.link3) {
    //   err.description = "Description is required";
    // }

    return err;
  };
  return (
    <div className='form-container'>
      <h1>Create Note</h1>
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
            />
            <Form.Input
              fluid
              error={
                errors.title
                  ? { content: "please enter a title", pointing: "below" }
                  : null
              }
              label='link1'
              placeholder='screenshotlink'
              name='link1'
              onChange={handleChange}
            />
            <Form.Input
              fluid
              // error={
              //   errors.title
              //     ? { content: "please enter a title", pointing: "below" }
              //     : null
              // }
              label='link2'
              placeholder='screenshotlink'
              name='link2'
              onChange={handleChange}
            />
            <Form.Input
              fluid
              // error={
              //   errors.title
              //     ? { content: "please enter a title", pointing: "below" }
              //     : null
              // }
              label='link3'
              placeholder='screenshotlink'
              name='link3'
              onChange={handleChange}
            />
            <Button type='submit'>Create</Button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default Create;
