import React, { useContext } from 'react';
import Calendars from '../../components/Calendars';
import Promo from '../../components/Promo';
import ServiceIncentives from '../../components/ServiceIncentives';
import ServiceLists from '../../components/ServiceLists';
import ContainerSection from '../../components/common/ContainerSection';
import { uicontext } from '../../context/UIcontext';

function Services(props) {
    const { slideOver } = useContext(uicontext);
    const { setOpen } = slideOver;
    return (
        <>
            <Promo setOpen={setOpen} />
            <ContainerSection>
                <ServiceLists setOpen={setOpen} />
                <ServiceIncentives />
                <div className='my-2 sm:my-4 lg:my-8'>
                    <Calendars setOpen={setOpen} />
                </div>
            </ContainerSection>
        </>
    );
}

export default Services;