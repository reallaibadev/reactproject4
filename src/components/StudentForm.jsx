import "./StudentForm.css";

export default function StudentForm() {
  return (
    <>
      <div className="registration-container">
        <h2 className="form-title">STUDENT REGISTRATION FORM</h2>
        
        <table className="form-table">
          <tbody>
            <tr>
              <td>FIRST NAME</td>
              <td><input type="text" /> (max 30 characters a-z and A-Z)</td>
            </tr>
            <tr>
              <td>LAST NAME</td>
              <td><input type="text" /> (max 30 characters a-z and A-Z)</td>
            </tr>
            <tr>
              <td>DATE OF BIRTH</td>
              <td>
                <select><option>Day:</option></select>
                <select><option>Month:</option></select>
                <select><option>Year:</option></select>
              </td>
            </tr>
            <tr>
              <td>EMAIL ID</td>
              <td><input type="email" /></td>
            </tr>
            <tr>
              <td>MOBILE NUMBER</td>
              <td><input type="text" /> (10 digit number)</td>
            </tr>
            <tr>
              <td>GENDER</td>
              <td>
                Male <input type="radio" name="gender" /> 
                Female <input type="radio" name="gender" />
              </td>
            </tr>
            <tr>
              <td>ADDRESS</td>
              <td><textarea rows="4" cols="30"></textarea></td>
            </tr>
            <tr>
              <td>CITY</td>
              <td><input type="text" /> (max 30 characters a-z and A-Z)</td>
            </tr>
            <tr>
              <td>PIN CODE</td>
              <td><input type="text" /> (6 digit number)</td>
            </tr>
            <tr>
              <td>STATE</td>
              <td><input type="text" /> (max 30 characters a-z and A-Z)</td>
            </tr>
            <tr>
              <td>COUNTRY</td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>HOBBIES</td>
              <td>
                Drawing <input type="checkbox" /> 
                Singing <input type="checkbox" /> 
                Dancing <input type="checkbox" /> 
                Sketching <input type="checkbox" />
                <br />
                Others <input type="checkbox" /> <input type="text" />
              </td>
            </tr>
            
            {/* Qualification Table Section */}
            <tr>
              <td>QUALIFICATION</td>
              <td>
                <table className="inner-table">
                  <thead>
                    <tr>
                      <th>Sl.No. Examination</th>
                      <th>Board</th>
                      <th>Percentage</th>
                      <th>Year of Passing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {["Class X", "Class XII", "Graduation", "Masters"].map((exam, index) => (
                      <tr key={index}>
                        <td>{index + 1} {exam}</td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                      </tr>
                    ))}
                    <tr>
                      <td></td>
                      <td>(10 char max)</td>
                      <td>(upto 2 decimal)</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <tr>
              <td>COURSES <br /> APPLIED FOR</td>
              <td>
                BCA <input type="radio" name="course" />
                B.Com <input type="radio" name="course" />
                B.Sc <input type="radio" name="course" />
                B.A <input type="radio" name="course" />
              </td>
            </tr>

            <tr>
              <td colSpan="2" align="center">
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}