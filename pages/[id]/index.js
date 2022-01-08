import { useState, useEffect } from "react";
import Image from "next/image";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import { Confirm, Button, Loader } from "semantic-ui-react";

const baseUrl = process.env.BASE_URL;
const Note = ({ note }) => {
  const [confirm, setConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isDeleting) {
      deleteNote();
    }
    //eslint-disable-next-line
  }, [isDeleting]);

  const deleteNote = async () => {
    const noteId = router.query.id;

    try {
      const deleted = await fetch(`${baseUrl}/api/notes/${noteId}`, {
        method: "DELETE",
      });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const open = () => {
    setConfirm(true);
  };
  const close = () => {
    setConfirm(false);
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    close();
  };
  return (
    <div className='note-container'>
      {isDeleting ? (
        <Loader active />
      ) : (
        <>
          <Image
            // src='https://images.unsplash.com/photo-1638913972706-91fc2cb57152?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            src={`${note.link1}`}
            alt='Picture of the author'
            width={500}
            height={500}
          />
          <h1>{note.title}</h1>
          <h1>{note.description}</h1>
          <Button color='red' onClick={open}>
            Delete
          </Button>
        </>
      )}

      <Confirm open={confirm} onCancel={close} onConfirm={handleDelete} />
    </div>
  );
};

Note.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`${baseUrl}/api/notes/${id}`);
  const { data } = await res.json();

  return { note: data };
};

export default Note;
