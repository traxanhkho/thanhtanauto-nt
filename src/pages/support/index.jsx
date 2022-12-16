import React from 'react';
import Heading from '../../components/common/Heading';
import ContainerSection from "../../components/common/ContainerSection";
import Steps from '../../components/Steps';

function Support(props) {
    return (
        <ContainerSection >
            <div className='py-4 sm:py-8 col-span-3'>
                <Heading classes={"text-c-blue-1"}>
                    vui lòng nhập thông tin đặt lịch hẹn của bạn
                </Heading>
                <div className='mt-4'>
                    <Steps />
                </div>
            </div>
        </ContainerSection>

    );
}

export default Support;