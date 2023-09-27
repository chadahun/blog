/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post ='강남 우동 맛집';  
  let [글제목,글제목변경]=useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let [하트,하트변경]=useState([0,0,0,0]);
  let [modal,setModal]=useState(false);
  let [title,setTitle]=useState(0);
  let [입력값,입력값변경]=useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'red',fontSize:'20px'}}>React Blog</h4>
        <button onClick={()=>{
          let copy2=[...글제목];
          copy2.sort();
          글제목변경(copy2);
        }}>가나다순 정렬</button>
        <button onClick={()=>{let copy=[...글제목];
        copy[0]='여자 코트 추천';
        글제목변경(copy);
      }}>변경</button>
      </div>
      {/* <div className="list">
        <h4>{글제목[0]}<span onClick={()=>{하트변경(하트+1)}}>🤞</span> {하트} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{
          setModal(!modal);
          
        }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      
         {
          글제목.map(function(a,i){
            return(
              <div className="list" key={i}>
                <h4 onClick={()=>{setModal(!modal);setTitle(i)}}>
                  {a}<span onClick={(e)=>{e.stopPropagation();
                  let copy3 = [...하트];
                  copy3[i]=copy3[i]+1;
                  하트변경(copy3);
                }}>🤞</span> {하트[i]}</h4>
                <p>9월 27일 발행</p>
                <button onClick={()=>{
                  let copy1=[...글제목];
                  copy1.splice(i,1);
                  글제목변경(copy1);
                }}>삭제</button>
              </div>
            )
          })
         }
         <input onChange={(e)=>{입력값변경(e.target.value);}}></input>
         <button onClick={()=>{
          let copy0=[...글제목];
          copy0.unshift(입력값);
          글제목변경(copy0)
         }}>글생성</button>

         {
        modal==true?<Modal asd={글제목} fc={글제목변경} title={title}></Modal>:null
         }
    </div>
  );
}

function Modal(props){
  return(
    // <div className="modal">
    //     <h4>{props.asd[0]}</h4>
    //     <p>날짜</p>
    //     <p>상세내용</p>
    //     <button onClick={()=>{props.fc(['여자 코트 추천','강남 우동 맛집','파이썬 독학'])}}>글수정</button>
    // </div>
    <div className="modal">
        <h4>{props.asd[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{props.fc(['여자 코트 추천','강남 우동 맛집','파이썬 독학'])}}>글수정</button>
    </div>
      
  )
}


export default App;