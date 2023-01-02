import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Main = (props) => {
  const [listItem, setListItem] = useState(props.data);
  const pageSize = 40;
  const mailDomain = "@ntq-solution.com.vn";
  const sliceListItem = (arr) => {
    const totalPage = Math.floor(arr.length / pageSize);
    const itemLast = arr.length - totalPage * pageSize;
    const listItemNew = [];
    for (let i = 0; i < totalPage; i++) {
      listItemNew.push(arr.slice(i * pageSize, (i + 1) * pageSize));
    }
    if (itemLast != 0) {
      listItemNew.push(
        arr.slice(totalPage * pageSize, totalPage * pageSize + itemLast)
      );
    }
    return listItemNew;
  };
  const [listItemAllPage, setlistItemAllPage] = useState(
    sliceListItem(listItem)
  );
  const [valueInputNameAdd, setValueInputNameAdd] = useState("");
  const [valueInputJobAdd, setValueInputJobAdd] = useState("");
  const [valueInputEmailAdd, setValueInputEmailAdd] = useState("");
  const [indexPage, setIndexPage] = useState(0);
  const changeValueInputNameAdd = (e) => {
    setValueInputNameAdd(e.target.value);
  };
  const changeValueInputJobAdd = (e) => {
    setValueInputJobAdd(e.target.value);
  };

  const handleNextPage = () => {
    if (indexPage < listItemAllPage.length - 1) {
      setIndexPage(indexPage + 1);
    }
  };

  const handleBackPage = () => {
    if (indexPage > 0 && indexPage <= listItemAllPage.length - 1) {
      setIndexPage(indexPage - 1);
    }
  };

  const loc_xoa_dau = (str) => {
    // Gộp nhiều dấu space thành 1 space
    str = str.replace(/\s+/g, " ");
    // loại bỏ toàn bộ dấu space (nếu có) ở 2 đầu của chuỗi
    str = str.trim();
    // bắt đầu xóa dấu tiếng việt  trong chuỗi
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");

    return str;
  };

  // Xử Lý Mail
  var regex = /\d+/    //Number in string
  const handleValidateEmail = (value) => {
    let check = []
    let formatValue = loc_xoa_dau(value.toLowerCase()).split(" ");
    let countNumberMail = 0;
    let userMail = formatValue.length === 1 ? `${formatValue[0]}` : `${formatValue[formatValue.length - 1]}.${formatValue[0]}`;
      listItem.forEach((item)=>{
        if(Number(item.email.toString().match(regex)) > 0 && item.email.toString() === `${userMail}${item.email.toString().match(regex)}${mailDomain}`){
          check.push(Number(item.email.toString().match(regex)))
          countNumberMail = Math.max.apply(null, check)+1
        }else if(item.email.toString() === `${userMail}${mailDomain}` && countNumberMail == 0){
          countNumberMail++
        }
      })
    if (countNumberMail === 0) {
      return userMail + mailDomain;
    }
    return userMail + countNumberMail + mailDomain;
  };
  const handleOnBlurNameAdd = () => {
    if (valueInputNameAdd) {
      setValueInputEmailAdd(handleValidateEmail(valueInputNameAdd));
    } else {
      setValueInputEmailAdd("");
    }
  };

  //Add Member
  const handleAddMember = () => {
    if (
      valueInputEmailAdd !== "" &&
      valueInputNameAdd !== "" &&
      valueInputJobAdd !== "" 
    ) {
      listItem.unshift({
        id: uuidv4(),
        name:valueInputNameAdd,
        job: valueInputJobAdd,
        email: valueInputEmailAdd,
      })
      setlistItemAllPage(sliceListItem(listItem));
      setValueInputEmailAdd("");
      setValueInputJobAdd("");
      setValueInputNameAdd("");
      setIndexPage(0);
      setValueInputSearch('')
    }}

  // Search Member
  const [valueInputSearch,setValueInputSearch]=useState('')
  const [valueSelectSearch, setValueSelectSearch] = useState("name");
  const handleValueSelectSearch = (e) => {
    setValueSelectSearch(e.target.value);
    searhMember(valueInputSearch,e.target.value)
  };
  const searhMember = (value,searchType) => {
    const listItemAfterSearch = [];
    listItem.forEach((item) => {
      if (
        item[searchType].toString().toUpperCase().trim().includes(value.toUpperCase())
      ) {
        listItemAfterSearch.push(item);
      }
    });
    setIndexPage(0);
    setlistItemAllPage(sliceListItem(listItemAfterSearch));
  };

  const handleSearchMember = (e) => {
    searhMember(e.target.value,valueSelectSearch);
    setValueInputSearch(e.target.value)
  };

  //Filer Sort
  const handleSortName = (e) => {
    let listItemAllPageTemp = [];
    listItemAllPage.forEach((item) => {
      listItemAllPageTemp = listItemAllPageTemp.concat(item);
    });
    listItemAllPageTemp.sort((a, b) => {
      if (
        a.email.toString().trim().split(".")[0] <
        b.email.toString().trim().split(".")[0]
      ) {
        return e.target.value === "increase" && -1;
      } else if (
        a.email.toString().trim().split(".")[0] >
        b.email.toString().trim().split(".")[0]
      ) {
        return e.target.value === "decrease" && -1;
      }
    });
    setlistItemAllPage(sliceListItem(listItemAllPageTemp));
  }
  return (
    <div className="main">
      <div className="main__control">
        <div className="control__title">
          <div
            style={{
              maxWidth: "45%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <label style={{ fontSize: "1.4rem" }}>Name</label>
            <input
              onChange={changeValueInputNameAdd}
              onBlur={handleOnBlurNameAdd}
              value={valueInputNameAdd}
            ></input>
          </div>
          <div
            style={{
              maxWidth: "45%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <label style={{ fontSize: "1.4rem" }}>Job</label>
            <input
              onChange={changeValueInputJobAdd}
              value={valueInputJobAdd}
            ></input>
          </div>
          <div
            style={{
              maxWidth: "45%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <label style={{ fontSize: "1.4rem" }}>Email</label>
            <input value={valueInputEmailAdd}></input>
          </div>
        </div>
        <button className="btnAddMember" onClick={handleAddMember}>
          Add Member Here
        </button>
        <div className="control">
          <div className="control__search">
            <input
              type="text"
              placeholder="Search..."
              onChange={handleSearchMember}
              value = {valueInputSearch}
            ></input>
            <select onChange={handleValueSelectSearch}>
              <option value={"name"}>Search for Name</option>
              <option value={"job"}>Search for Job</option>
              <option value={"email"}>Search for Email</option>
            </select>
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="control-select">
            <div className="control-select__filter">
              <select onChange={handleSortName}>
                <option style={{display :"none"}}>Filter</option>
                <option value={"increase"}>Tên A - Z</option>
                <option value={"decrease"}>Tên Z - A</option>
              </select>
            </div>
            <div className="control-select__pages">
              <div className="page-number">
                <span className="page-number__value">{`Page ${indexPage +
                  1}`}</span>
                <span className="btn-control">
                  <button onClick={handleBackPage}>
                    <i className="fas fa-angle-left"></i>
                  </button>
                  <button onClick={handleNextPage}>
                    <i className="fas fa-angle-right"></i>
                  </button>
                </span>
                <span className="btn-control btn-tablist">
                  <button>
                    <i className="fas fa-th-large"></i>
                  </button>
                  <button>
                    <i className="fas fa-list"></i>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main__content">
        <div className="content-employee__list">
          {listItemAllPage.length !== 0 && listItemAllPage[indexPage].map((item) => {
              return (
                <div className="content-employee__item" key={item.id}>
                  <div className="employ-item">
                    <div className="employee-img">
                      <h1 style={{fontSize : "25px"}}>{item.email!==false ? item.email.toString().split('')[0].toUpperCase() : item.name.split(' ')[item.name.split(' ').length-1].split('')[0].toUpperCase()}</h1>
                      <p className="employee-img__connect">
                        <i className="fas fa-comments"></i>15
                        <i className="fas fa-users"></i>23
                      </p>
                    </div>
                    <div className="employee-info">
                      <p className="employee-info__name">{item.name}</p>
                      <ul className="employee-info__job">
                        <li>{item.job}</li>
                      </ul>
                      <p className="employee-info__email">
                        <i className="fas fa-envelope"></i> {item.email}
                      </p>
                      <button className="employee-follow__btn">Follow</button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Main;
