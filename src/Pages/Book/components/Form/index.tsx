import BMFormGroup from "../../../../components/shared/form-group";
import "./index.scss";
import { Ibook } from "../../../../Types/Book_types";
import { useEffect, useState } from "react";
import BMButton from "../../../../components/shared/button";
import BMCard from "../../../../components/shared/card";
import { isStringEmpty } from "../../../../unitil/string-helper";
import { APP_MESSAGES } from "../../../../constants/messages";

type Props = {
  loading?: boolean;
  initValue: Ibook;
  onSubmitted: (formData: Ibook) => void;
};

const BMBookForm = ({ loading = false, initValue, onSubmitted }: Props) => {
  const [formData, setFormData] = useState<Ibook>(initValue);
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    setFormData(initValue);
    (
      document.querySelectorAll(
        "#bmForm .bm-form-control"
      )[1] as HTMLInputElement
    ).focus();
    setSubmitted(false);
  }, [initValue]);

  const handleaddBook = () => {
    setSubmitted(true);
    if (
      isStringEmpty(formData.code) ||
      isStringEmpty(formData.title) ||
      isStringEmpty(formData.author) ||
      isStringEmpty(formData.price.toString())
    ) {
      return;
    }
    onSubmitted(formData);
  };

  return (
    <BMCard title="Book information" loading={loading}>
      <div id="bmForm">
        <div className="form-section">
          <input id="ctrlId" type="hidden" />
          <BMFormGroup
            required
            label="Book Code"
            placeholder="Enter book code"
            value={formData?.code}
            onChange={(value) => setFormData({ ...formData, code: value })}
            errorMessage={
              submitted && isStringEmpty(formData.code)
                ? APP_MESSAGES.REQUIRED
                : ""
            }
            disabled={formData?.id ? true : false}
          />

          <BMFormGroup
            required
            label="Book Name"
            value={formData?.title}
            placeholder="Enter book name"
            onChange={(value) => setFormData({ ...formData, title: value })}
            errorMessage={
              submitted && isStringEmpty(formData.title)
                ? APP_MESSAGES.REQUIRED
                : ""
            }
          />

          <BMFormGroup
            required
            label="Author"
            value={formData?.author}
            placeholder="Select author"
            onChange={(value) => setFormData({ ...formData, author: value })}
            errorMessage={
              submitted && isStringEmpty(formData.author)
                ? APP_MESSAGES.REQUIRED
                : ""
            }
          />

          <BMFormGroup
            required
            label="Price"
            value={formData?.price}
            controlType="number"
            placeholder="Enter book price"
            onChange={(value) =>
              setFormData({ ...formData, price: Number(value) })
            }
            errorMessage={
              submitted &&
              (!formData.price || isStringEmpty(formData.price.toString()))
                ? APP_MESSAGES.REQUIRED
                : ""
            }
          />
        </div>
        <div className="form-actions">
          <BMButton
            text="Save changes"
            variant="primary"
            onClick={handleaddBook}
          />
          <BMButton
            text="Cancel"
            variant="secondary"
            // onClick={handleCancel}
            disabled={formData?.id ? false : true}
          />
        </div>
      </div>
    </BMCard>
  );
};
export default BMBookForm;
