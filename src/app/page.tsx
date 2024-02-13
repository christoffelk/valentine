'use client'
import Lottie from "lottie-react";
import animation1 from './asset/lottie/animation1.json'
import animation2 from './asset/lottie/animation2.json'
import Card from "./component/card";
import React from "react";
export default function Home() {
  const [page, setPage] = React.useState<string>("page1");
  const [picture, setPicture] = React.useState<string>("tiptoe.jpg")
  const [answer, setAnswer] = React.useState<boolean>(false);
  const [countedClicked,setCountedClicked] = React.useState<number>(0)
  const noImages = ['please2.jpg', 'please3.jpg', 'please4.jpg', 'please5.jpg'];
  const random = (min = 0, max = noImages.length - 1) => Math.floor(Math.random() * (max - min)) + min;
  const onSetPicture = React.useCallback((param: string) => {
    setPicture(param)
  }, [])

  const onCountClicked = React.useCallback(() => {
    setCountedClicked((prev) => prev + 1)
  },[])
  return (
    <main>
      {
        page === "page1" ? <>
          <div style={{ width: '100%', display: "flex", justifyContent: "center" }}>
            <Lottie animationData={animation1} className="animation1" ></Lottie>
            <Lottie animationData={animation2} className="animation2"></Lottie>
            <Lottie animationData={animation1} className="animation3"></Lottie>
          </div>
          <div className="content">
            <Card />
            <div className="content-text">
              <p style={{ fontFamily: 'valentine', lineHeight: 2 }}>I am in love w i t h you. I know t h a t  love is just a shout into t h e  void and t h a t  oblivion is inevitable. And t h a t  we’re a l l  d o o m e d  and t h a t  one day all of our labors w i l l  be returned to dust. And I know t he sun w i l l  s w a l l o w  t h e  only E a r t h  we w i l l  ever have. And I am in love w i t h  you.</p>
              <button onClick={() => setPage("page2")} className="next-button">Next</button>
            </div>
            <div style={{
              marginTop: 8
            }}>
              <Card placement="flex-end" imageName="love3.jpg" rotateDegree="20deg" />
            </div>
          </div>
        </> :
          <>
            <div className="container-page-2">
              {
                !answer && (<h1 className="center-text">Do You want to be my GirlFriend???</h1>)
              }
              <img style={{
                width: "250px"
              }} src={picture}></img>
              {
                answer ?
                  <>
                    <div className="center-text">
                      <h1>Yeay Finally I got A GirlFriend</h1>
                    </div></> :
                  <>
                  {countedClicked > 5 && (<h1 className="center-text">Just Clicked Yes!!!</h1>)}
                    <div className="button-container">
                      <button className="button-answer yes-button" onClick={() => {
                        onSetPicture("amoy.jpg")
                        setAnswer(true)
                        setTimeout(() => {
                          setPage("page1")
                        },5000)
                      }}>Yes</button>
                      {!(countedClicked > 5) && (
                         <button className="button-answer no-button" onClick={() => {
                          onSetPicture(noImages[random()])
                          onCountClicked()
                        }}>No</button>
                      ) }
                     
                    </div>
                    
                  </>
              }
            </div>
          </>
      }

    </main>
  );
}
