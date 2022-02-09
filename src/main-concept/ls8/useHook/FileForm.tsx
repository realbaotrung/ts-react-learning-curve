export default function FileForm(): JSX.Element {
  return (
    <div>
      {/*
      ================================================
      <input type='file'> lets the user choose
      One or More Files from their device storage
      to be uploaded to a server or manipulated
      by Javascript via "File API"

      its value is read-only,
      it is an 'uncontrolled component'
      ================================================
      */}
      <label htmlFor="file">
        Upload file:
        <input type="file" />
      </label>
    </div>
  );
}
