import ContainerSection from '../../components/common/ContainerSection';
import BlogsGroup from '../../components/BlogsGroup';
import NewsMedia from '../../components/NewsMedia';
import Pagination from '../../components/Pagination';
import Heading from '../../components/common/Heading';

function Blogs() {
    return (
        <ContainerSection >
            <div className='grid lg:grid-cols-4 gap-4 pt-4 sm:pt-8 '>
                <div className='lg:col-span-3'>
                    <Heading classes="my-2 sm:my-4 ">Danh sách bài viết</Heading>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 gap-8'>
                        {[0, 1, 2, 3, 4, 5].map(item => <NewsMedia key={item} id={item + 1} size="h-24 w-24" />)}
                    </div>
                    <Pagination />
                </div>

                <div className='col-span-1 space-y-4 hidden lg:block'>
                    <h2 className='text-md sm:text-xl font-bold capitalize my-2 sm:my-4 tracking-tight'>bài viết hay nhất</h2>
                    {[0, 1, 2, 3, 4].map(item => <NewsMedia key={item} noHeading={true} lineClamp={3} id={item + 1} />)}
                </div>
            </div>
            <BlogsGroup />
        </ContainerSection>

    );
}

export default Blogs;