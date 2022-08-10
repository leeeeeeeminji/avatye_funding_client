import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostHeader from "../../../components/post/PostHeader";
import classes from './ProjectEditor.module.css'

const ProjectEditor = () => {
    const navigator = useNavigate();
    const [categoryState, setCategoryState] = useState('');
    const [isSummery, setIsSummery] = useState('');
    const DUMMY_CATEGORY = ['보드게임/TRPG', '디지털게임', '웹툰/만화', '웹툰 리소스', '디자인 문구', '캐릭터/굿즈', '홈/리빙', '테크/가전', '반려동물',
        '푸드', '향수/뷰티', '의류', '잡화', '주얼리', '출판', '디자인', '예술', '사진', '음악', '영화/비디오', '공연']
    
    const textareaChangeHandler = (e) => {
        setIsSummery(String(e.target.value).replace(/  /g," "))
    }
    
    return <>
        <PostHeader />
        <div className={classes.editor}>
            <div className={classes.left}>
            </div>
            <div className={classes.right}>
                    <div className={classes.cont}>
                        <h2>멋진 아이디어가 있으시군요! <br />어떤 프로젝트를 계획 중이신가요?</h2>
                        <p>나중에 변경 가능하니 너무 걱정마세요.</p>
                    <div className={classes.categorygroup}> 
                        {DUMMY_CATEGORY.map((item) => {
                            return <label key={item} className={classes.categorybutton}>
                                <input
                                    id={item}
                                    type="radio"
                                    value={item}
                                    name="items"
                                    checked={categoryState === `${item}`}
                                    onChange={(e) => setCategoryState(e.target.value)}
                                />
                                <button onClick={() => setCategoryState(`${item}`)}>{item}</button>
                                </label>
                            })}
                    </div>
                </div>
                {categoryState && <div className={classes.project}>
                    <h2>프로젝트를 간단하게 소개해주세요.</h2>
                    <p>나중에 수정 가능하니 편하게 적어주세요.</p>
                    <div className={classes.cont}>
                        <textarea placeholder="프로젝트 요약을 입력해주세요." onChange={textareaChangeHandler} value={isSummery}></textarea>
                        <div className={classes.guide}>
                            <span>최소 10자이상 입력해주세요.</span>
                            <span>{isSummery.trim().length} / 50</span>
                        </div>
                        <div className={classes.btn}>
                            <button onClick={() => navigator('/project-editor/create', {state : {categoryState, isSummery}})}>다음</button>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    </>
}

export default ProjectEditor;