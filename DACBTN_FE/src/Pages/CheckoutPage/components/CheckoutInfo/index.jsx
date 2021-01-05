import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import * as Yup from "yup";
import { getDistrict, getProvinces } from "../../../../apis/location";
import InputField from "../../../../shares/Custom-Fields/InputField";
const profileSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Không đúng định dạng email")
    .required("Yêu cầu nhập email"),

  name: Yup.string().required("Yêu cầu nhập tên"),
  surname: Yup.string().required("Yêu cầu nhập tên"),
  gender: Yup.string().required("Yêu cầu chọn giới tính"),
  address: Yup.string().required("Yêu cầu nhập địa chỉ"),
  province: Yup.number().required("Yêu cầu chọn tỉnh"),
  district: Yup.number().required("Yêu cầu chọn huyện"),
});

function CheckoutInfo(props) {
  const { currentUser } = props;
  const [provinces, setProvinces] = useState([]);
  const [selectProvince, setSelectProvince] = useState({
    label: "",
    value: "",
  });
  const provinceOptions = provinces.map((province) => ({
    value: province.ProvinceID,
    label: province.ProvinceName,
  }));

  const [districts, setDistricts] = useState([]);
  const districtsOption = districts.map((districts) => ({
    value: districts.DistrictID,
    label: districts.DistrictName,
  }));
  const [selectDistrict, setSelectDistrict] = useState({
    label: "",
    value: "",
  });
  //Lấy Tỉnh Thành Phố Hiện Tại
  useEffect(() => {
    getProvinces().then((res) => {
      setProvinces(res.data.data);
      const data = res.data.data.find((province) => {
        return province.ProvinceID === currentUser.province;
      });
      try {
        setSelectProvince({
          value: data ? data.ProvinceID : "",
          label: data ? data.ProvinceName : "",
        });
      } catch (error) {}
    });
  }, []);

  //Lấy Huyện Hiện Tại
  useEffect(() => {
    getDistrict({ province_id: currentUser.province }).then((res) => {
      setDistricts(res.data.data);
      const data = res.data.data.find((district) => {
        return district.DistrictID === currentUser.district;
      });
      try {
        setSelectDistrict({
          value: data ? data.DistrictID : "",
          label: data ? data.DistrictName : "",
        });
      } catch (error) {
        console.log(error);
      }
    });
  }, []);
  return (
    <div className="card">
      <div className="card-body">
        <header className="mb-4">
          <h4 className="card-title">Địa chỉ nhận hàng</h4>
        </header>
        {/* <form>
          <div className="form-group">
            <label>Tên người nhận</label>
            <input name="name" className="form-control" type="text" />
          </div>
          <div className="form-row">
            <div className="form-group col-6">
              <label>Email người nhận</label>
              <input name="email" className="form-control" type="email" />
            </div>
            <div className="form-group col-6">
              <label>Số điện thoại người nhận</label>
              <input name="phoneNum" className="form-control" type="text" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Tỉnh / Thành phố</label>
              <select
                name="province"
                className="form-control"
                defaultValue="test"
              >
                <option value="test">Choose...</option>
                <option>Uzbekistan</option>
                <option>Russia</option>
                <option>United States</option>
                <option>India</option>
                <option>Afganistan</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label>Quận Huyện</label>
              <select
                name="district"
                className="form-control"
                defaultValue="test"
              >
                <option value="test">Choose...</option>
                <option>Uzbekistan</option>
                <option>Russia</option>
                <option>United States</option>
              </select>
            </div>
          </div>
          <div className=" form-group">
            <label>Địa chỉ cụ thể</label>
            <input type="text" className="form-control" name="address" />
          </div>
          <div className="form-group mt-3 ">
            <button type="submit" className="btn btn-primary btn-block w-80">
              Đặt hàng
            </button>
          </div>
          <div className="form-group mt-3 ">
            <Link to="/cart" className="btn btn-light btn-block w-80">
              Quay lại
            </Link>
          </div>
        </form> */}
        <Formik
          initialValues={currentUser}
          onSubmit={(values) => {
            console.log(values)
          }}
          validationSchema={profileSchema}
        >
          {(props) => {
            const {
              values,
              errors,
              touched,
              setFieldTouched,
              setFieldValue,
            } = props;
            return (
              <Form>
                <div className="form-row">
                  <div className="col">
                    <FastField name="name" label="Tên" component={InputField} />
                  </div>

                  <div className="col">
                    <FastField
                      name="surname"
                      label="Họ"
                      component={InputField}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-6">
                    <FastField
                      name="email"
                      label="email"
                      type="email"
                      component={InputField}
                    />
                  </div>
                  <div className=" col-6">
                    <FastField
                      name="phoneNum"
                      label="Số điện thoại"
                      type="text"
                      component={InputField}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="gender">Giới Tính</label>
                  <br />
                  <FastField name="gender">
                    {({ field, form }) => (
                      <>
                        <InputField
                          form={form}
                          field={field}
                          value="male"
                          label="Nam"
                          type="radio"
                        />
                        <InputField
                          form={form}
                          field={field}
                          value="female"
                          label="Nữ"
                          type="radio"
                        />
                      </>
                    )}
                  </FastField>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Tỉnh / Thành phố</label>
                    <Select
                      name="province"
                      options={provinceOptions}
                      placeholder="Chọn Tỉnh"
                      value={selectProvince}
                      onChange={(value) => {
                        setSelectProvince(value);
                        setFieldTouched("province", true);
                        setFieldValue("province", value.value);
                        setFieldValue("district", "");
                        getDistrict({ province_id: value.value }).then(
                          (res) => {
                            setDistricts(res.data.data);
                          }
                        );
                      }}
                      onBlur={() => {
                        setFieldTouched("province", true);
                        setFieldValue("province", values.province);
                      }}
                      styles={{
                        control: (base) => ({
                          ...base,
                          borderColor:
                            errors["province"] && touched["province"]
                              ? "#dc3545"
                              : "#ced4da",
                          boxShadow: "none",
                        }),
                      }}
                    />
                    {errors["province"] && touched["province"] && (
                      <small className="text-danger">
                        {errors["province"]}
                      </small>
                    )}
                  </div>
                  <div className="form-group col-md-6">
                    <label>Quận / Huyện</label>
                    <Select
                      name="district"
                      options={districtsOption}
                      placeholder="Chọn Huyện"
                      value={selectDistrict}
                      onChange={(value) => {
                        setSelectDistrict(value);
                        setFieldTouched("district", true);
                        setFieldValue("district", value.value);
                      }}
                      onBlur={() => {
                        setFieldTouched("district", true);
                        setFieldValue("district", values.district);
                      }}
                      styles={{
                        control: (base) => ({
                          ...base,
                          borderColor:
                            errors["province"] && touched["province"]
                              ? "#dc3545"
                              : "#ced4da",
                          boxShadow: "none",
                        }),
                      }}
                    />
                    {errors["district"] && touched["district"] && (
                      <small className="text-danger">
                        {errors["district"]}
                      </small>
                    )}
                  </div>
                </div>
                <div className=" form-group">
                  <FastField
                    name="address"
                    label="Địa chỉ cụ thể"
                    type="text"
                    component={InputField}
                  />
                </div>
                <div className="form-group">
                  <div className="form-group mt-3 ">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block w-80"
                    >
                      Đặt hàng
                    </button>
                  </div>
                  <div className="form-group mt-3 ">
                    <Link to="/cart" className="btn btn-light btn-block w-80">
                      Quay lại
                    </Link>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

CheckoutInfo.propTypes = {
  currentUser: PropTypes.object,
};

export default CheckoutInfo;
