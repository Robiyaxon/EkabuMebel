import React, { useState } from 'react';
import { Modal } from 'antd';
import style from "../../css/Master2.module.css";

export const Master5 = (video4, video3) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div className={style.MOdelBlock}>
        <Modal className={style.model2} visible={isModalVisible} onCancel={handleCancel}>
          <video className={style.MutedVIDEO} src={video4} autoPlay loop muted controls />
        </Modal>
      </div>
      <div className={style.Video_Block1}>
        <div className={style.Video_Block1_1} onClick={showModal}> <video src={video3} autoPlay loop muted /></div>
        <div className={style.Video_Block2}>
          <p>Здесь продающая/закрывающая сомнения цитата из видео. Здесь продающая/закрывающая сомнения цитата из видео.</p>
        </div>
      </div>
    </>
  );
};
