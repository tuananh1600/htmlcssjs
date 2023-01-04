import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { sliceListItem, loc_xoa_dau,totalResult } from "./function";
import debounce from "lodash.debounce";
const Main = (props) => {
  const [listItem, setListItem] = useState(props.data);
  const mailDomain = "@ntq-solution.com.vn";
  const [listItemAllPage, setlistItemAllPage] = useState(sliceListItem(listItem,40));
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
        }else if(item.email.toString() === `${userMail}${mailDomain}` && countNumberMail === 0){
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
        name:valueInputNameAdd.trim(),
        job: valueInputJobAdd.trim(),
        email: valueInputEmailAdd.trim(),
      })
      setlistItemAllPage(sliceListItem(listItem,40));
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
    const newValue = loc_xoa_dau(value)
    listItem.forEach((item) => {
      if (
        loc_xoa_dau(item[searchType].toString().toUpperCase().trim()).includes(newValue.toUpperCase())
      ) {
        listItemAfterSearch.push(item);
      }
    });
    setIndexPage(0);
    setlistItemAllPage(sliceListItem(listItemAfterSearch,40));
  };

  const handleSearchMember = (e) => {
    searhMember(e.target.value.trim(),valueSelectSearch);
    setValueInputSearch(e.target.value)
  };
  const debounceOnChange = debounce(handleSearchMember,300)

  //Filer Sort
  const handleSortName = (event) => {
    let listItemAllPageTemp = [];
    listItemAllPage.forEach((item) => {
      listItemAllPageTemp = listItemAllPageTemp.concat(item);
    });
    listItemAllPageTemp.sort((a, b) => {
      let c = a.name.trim().split(" ");
      let d = b.name.trim().split(" ");
      let e = !Number(c[c.length - 1]) ? c[c.length - 1] : c[c.length - 2];
      let f = !Number(d[d.length - 1]) ? d[d.length - 1] : d[d.length - 2];
      return event.target.value === "increase" ? e.localeCompare(f) : f.localeCompare(e)
    });
    setlistItemAllPage(sliceListItem(listItemAllPageTemp,40));
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
              onChange={debounceOnChange}
              // value = {valueInputSearch}
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
            <h3>{`Tổng kết quả : ${totalResult(listItemAllPage)}`}</h3>
            <div className="control-select__pages">
              <div className="page-number">
                <span className="page-number__value">{`Page ${indexPage +
                  1}/${listItemAllPage.length}`}</span>
                <span className="btn-control">
                  <button
                  onClick={handleBackPage} 
                  disabled ={indexPage === 0 ? 'false' : '' }
                   >
                    <i className="fas fa-angle-left"></i>
                  </button>
                  <button 
                  onClick={handleNextPage}
                  disabled={indexPage + 1 === listItemAllPage.length ? 'false' : ''}
                  >
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
