import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ErrorMessage } from "formik";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SEND, ACTIVITY_TITLE } from "../../Helpers/messagesText";

const ActivitiesForm = ({
  handleSubmit,
  setFieldValue,
  values,
  touched,
  formikHandleOnChange,
  CKEditorHandleOnChange,
  activityData,
  submitting,
}) => (
  <form className="form-container" onSubmit={handleSubmit}>
    <input
      className="input-field"
      type="text"
      name="name"
      onChange={formikHandleOnChange("name")}
      placeholder={ACTIVITY_TITLE}
      value={values.name}
    />
    {touched.name && <ErrorMessage name="name" />}

    <CKEditor
      editor={ClassicEditor}
      data={activityData?.description}
      onChange={(e, editor) => CKEditorHandleOnChange(editor, setFieldValue)}
    />
    {touched.description && <ErrorMessage name="description" />}
    <input
      className="submit-btn"
      type="file"
      max={1}
      name="image"
      accept="image/png, image/jpeg"
      onChange={(e) => setFieldValue("image", e.currentTarget.files[0])}
    />
    {touched.image ? <ErrorMessage name="image" /> : null}
    <button className="submit-btn" type="submit" disabled={submitting}>
      {submitting ? <Spinner animation="border" /> : SEND}
    </button>
  </form>
);

export default ActivitiesForm;
