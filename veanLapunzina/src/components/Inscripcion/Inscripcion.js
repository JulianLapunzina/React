import Form from 'react-bootstrap/Form';

import InputGroup from 'react-bootstrap/InputGroup';

function Inscripcion() {
return (
    <>
    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
    crossorigin="anonymous"
    />
    <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
        />
    </InputGroup>

    <InputGroup className="mb-3">
        <Form.Control
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
    </InputGroup>

    <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
    <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
        https://example.com/users/
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
    </InputGroup>

    <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>.00</InputGroup.Text>
    </InputGroup>

    <InputGroup>
        <InputGroup.Text>With textarea</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
    </InputGroup>
    </>
    );
}



export default Inscripcion;