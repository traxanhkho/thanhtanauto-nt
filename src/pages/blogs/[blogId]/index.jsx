import ContainerSection from '../../../components/common/ContainerSection';
import ContentSection from '../../../components/ContentSection';
import NewsMedia from '../../../components/NewsMedia';
import BlogsGroup from "../../../components/BlogsGroup";




function BlogDetail(props) {
    return (
        <ContainerSection >
            <div className='grid lg:grid-cols-4 gap-4 pt-8 '>
                <div className="lg:col-span-3">
                    <ContentSection />
                </div>
                <div className='hidden lg:block col-span-1 space-y-4'>
                    <h2 className='text-md sm:text-xl font-bold capitalize my-2 sm:my-4 tracking-tight'>bài viết hay nhất</h2>
                    <NewsMedia noHeading={true} id={1} lineClamp={3} />
                    <NewsMedia noHeading={true} id={1} lineClamp={3} />
                    <NewsMedia noHeading={true} id={1} lineClamp={3} />
                    <NewsMedia noHeading={true} id={1}  lineClamp={3} />
                    <NewsMedia noHeading={true} id={1} lineClamp={3} />
                </div>
            </div>
            <BlogsGroup />
        </ContainerSection>

    );
}

export default BlogDetail;