import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TeachersContext } from "../../context/TeachersContext";
import { NotificationIcon } from "../../assets/images";
import LogoutButton from "../../components/LogoutButton";

const TeacherModal = () => {
  const [teacherInfo, setTeacherInfo] = useState({
    fullName: "",
    email: "",
    subject: "",
    about: "",
    class: "",
    gender: "",
    age: "",
    image: null,
  });

  const { setTeachers } = useContext(TeachersContext);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTeacherInfo({ ...teacherInfo, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const exchange = () => {
    setTeacherInfo({ ...teacherInfo, image: null });
  };

  const handleSave = () => {
    setTeachers((prevTeachers) => [...prevTeachers, teacherInfo]);

    const existingTeachers = JSON.parse(localStorage.getItem("teachers")) || [];
    localStorage.setItem(
      "teachers",
      JSON.stringify([...existingTeachers, teacherInfo])
    );

    navigate("/teachers");
  };

  // Function to check if all required fields are filled
  const isFormValid = () => {
    return (
      teacherInfo.fullName &&
      teacherInfo.email &&
      teacherInfo.subject &&
      teacherInfo.about &&
      teacherInfo.class &&
      teacherInfo.gender &&
      teacherInfo.age
    );
  };

  return (
    <div className="w-[82%] overflow-y-auto h-[100vh]">
      <div className="bg-[#FCFAFA] w-[100%] flex justify-end px-[125px] py-[25px]">
        <div className="flex items-center gap-[16px]">
          <img
            src={NotificationIcon}
            alt="notification icon"
            width={28}
            height={28}
          />
          <LogoutButton />
        </div>
      </div>
      <form>
        <div className="flex justify-between items-center mb-[29px] pl-[39px] pr-[125px] py-[14px]">
          <p className="text-[20px] leading-[24px] font-medium text-[#4F4F4F]">
            Add teacher
          </p>
          <button
            onClick={handleSave}
            disabled={!isFormValid()} // Disable if form is not valid
            className={`bg-[#509CDB] text-white border border-transparent hover:bg-white hover:text-[#509CDB] hover:border-[#509CDB] px-4 py-2 rounded transition duration-300 ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Save
          </button>
        </div>
        <div className="flex pl-[39px] gap-[60px]">
          <div>
            <label className="font-medium text-[14px] leading-[17px] text-[#8A8A8A] flex flex-col gap-[5px]">
              Full Name
              <input
                type="text"
                placeholder="Full Name"
                required
                value={teacherInfo.fullName}
                onChange={(e) =>
                  setTeacherInfo({ ...teacherInfo, fullName: e.target.value })
                }
                className="border-[#A7A7A7] border-[0.5px] duration-300 py-[13px] pl-[10px] mb-[36px] w-[407px] outline-none rounded-[4px] text-black"
              />
            </label>
            <label className="font-medium text-[14px] leading-[17px] text-[#8A8A8A] flex flex-col gap-[5px]">
              Email Address
              <input
                type="email"
                placeholder="Email Address"
                required
                value={teacherInfo.email}
                onChange={(e) =>
                  setTeacherInfo({ ...teacherInfo, email: e.target.value })
                }
                className="border-[#A7A7A7] border-[0.5px] duration-300 py-[13px] pl-[10px] mb-[36px] w-[407px] outline-none rounded-[4px] text-black"
              />
            </label>
            <label className="font-medium text-[14px] leading-[17px] text-[#8A8A8A] flex flex-col gap-[5px]">
              Subject
              <select
                required
                value={teacherInfo.subject}
                onChange={(e) =>
                  setTeacherInfo({ ...teacherInfo, subject: e.target.value })
                }
                className="border-[#A7A7A7] border-[0.5px] duration-300 py-[13px] pl-[10px] mb-[36px] w-[407px] outline-none rounded-[4px] text-[#8A8A8A]"
              >
                <option value="" disabled> Subject</option>
                <option value="Maths">Maths</option>
                <option value="Chemistry">Chemistry</option>
                <option value="French">French</option>
                <option value="English">English</option>
                <option value="Social studies">Social studies</option>
                <option value="Home economics">Home economics</option>
                <option value="Geography">Geography</option>
                <option value="Pschology">Pschology</option>
                <option value="Physics">Physics</option>
                <option value="Accounting">Accounting</option>
                <option value="C.R.s">C.R.s</option>
                <option value="Politics">Politics</option>
              </select>
            </label>
            <label className="font-medium text-[14px] leading-[17px] text-[#8A8A8A] flex flex-col gap-[5px]">
              About
              <textarea
                placeholder="About"
                required
                value={teacherInfo.about}
                onChange={(e) =>
                  setTeacherInfo({ ...teacherInfo, about: e.target.value })
                }
                className="border-[#A7A7A7] border-[0.5px] duration-300 pt-[13px] pb-[142px] pl-[10px] mb-[36px] w-[407px] outline-none rounded-[4px] text-black"
              />
            </label>
          </div>
          <div>
            <label className="font-medium text-[14px] leading-[17px] text-[#8A8A8A] flex flex-col gap-[5px]">
              Class
              <select
                required
                value={teacherInfo.class}
                onChange={(e) =>
                  setTeacherInfo({ ...teacherInfo, class: e.target.value })
                }
                className="border-[#A7A7A7] border-[0.5px] duration-300 py-[13px] pl-[10px] mb-[36px] w-[407px] outline-none rounded-[4px] text-[#8A8A8A]"
              >
                <option value="" disabled> Class</option>
                <option value="J SS 1">J SS 1</option>
                <option value="J SS 2">J SS 2</option>
                <option value="J SS 3">J SS 3</option>
                <option value="J SS 4">J SS 4</option>
                <option value="J SS 5">J SS 5</option>
                <option value="SS 3">SS 3</option>
              </select>
            </label>
            <label className="font-medium text-[14px] leading-[17px] text-[#8A8A8A] flex flex-col gap-[5px]">
              Gender
              <select
                required
                value={teacherInfo.gender}
                onChange={(e) =>
                  setTeacherInfo({ ...teacherInfo, gender: e.target.value })
                }
                className="border-[#A7A7A7] border-[0.5px] duration-300 py-[13px] pl-[10px] mb-[36px] w-[407px] outline-none rounded-[4px] text-[#8A8A8A]"
              >
                <option value="" disabled> Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
            <label className="font-medium text-[14px] leading-[17px] text-[#8A8A8A] flex flex-col gap-[5px]">
              Age
              <input
                required
                type="number"
                placeholder="Age"
                value={teacherInfo.age}
                onChange={(e) =>
                  setTeacherInfo({ ...teacherInfo, age: e.target.value })
                }
                className="border-[#A7A7A7] border-[0.5px] duration-300 py-[13px] pl-[10px] mb-[59px] w-[407px] outline-none rounded-[4px] text-black"
              />
            </label>
            {teacherInfo.image && (
              <div className="mb-4">
                <img
                  src={teacherInfo.image}
                  alt="Teacher"
                  className="w-16 h-16 mb-2"
                />
                <button
                  onClick={exchange}
                  className="bg-red-500 text-white border border-transparent hover:bg-white hover:text-red-500 hover:border-red-500 px-2 py-1 rounded transition duration-300"
                >
                  Exchange
                </button>
              </div>
            )}
            {!teacherInfo.image && (
              <label className="text-[18px] cursor-pointer leading-[22px] text-[#4F4F4F] font-medium">
                Import Img
                <input
                  required
                  type="file"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default TeacherModal;

