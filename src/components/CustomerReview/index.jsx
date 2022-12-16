import SwiperComponent from '../SwiperComponent'
import { StarIcon } from '@heroicons/react/20/solid'
import { SwiperSlide } from 'swiper/react'

const reviews = [
    {
        id: 1,
        rating: 5,
        content: `
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi porro praesentium et, id blanditiis possimus natus cumque, aspernatur, ducimus facere totam vel quis ipsa? Rem non sed et. Aliquid, enim.</p>
    `,
        date: 'July 16, 2021',
        datetime: '2021-07-16',
        author: 'Tiến Đạt',
        avatarSrc:
            '/assets/images/avt-1.jpg',
    },
    {
        id: 2,
        rating: 5,
        content: `
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi porro praesentium et, id blanditiis possimus natus cumque, aspernatur, ducimus facere totam vel quis ipsa? Rem non sed et. Aliquid, enim.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi porro praesentium et.</p>
    `,
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        author: 'Minh Tiến',
        avatarSrc:
            '/assets/images/avt-4.jpg',
    },
    // More reviews...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CustomerReview() {

    const renderReview = (review, reviewIdx) => (
        <div key={review.id} className="flex space-x-4 text-sm text-gray-500">
            <div className="flex-none py-10">
                <img src={review.avatarSrc} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
            </div>
            <div className={'flex-1 py-10'}>
                <h3 className="font-medium text-gray-900">{review.author}</h3>
                <p>
                    <time dateTime={review.datetime}>{review.date}</time>
                </p>

                <div className="mt-4 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                            key={rating}
                            className={classNames(
                                review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                        />
                    ))}
                </div>
                <p className="sr-only">{review.rating} out of 5 stars</p>

                <div
                    className="prose prose-sm mt-4 max-w-none text-gray-500"
                    dangerouslySetInnerHTML={{ __html: review.content }}
                />
            </div>
        </div>
    )

    return (
        <div className="bg-white max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div>
                <h2 className="sr-only">Customer Reviews</h2>
                <h2 className='text-3xl capitalize font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-8'>cảm nhận của khách hàng</h2>

                <div className="-my-10">
                    <SwiperComponent >
                        {
                            reviews.map((review, reviewIdx) => (
                                <SwiperSlide key={reviewIdx}>
                                    {renderReview(review, reviewIdx)}
                                </SwiperSlide>
                            ))
                        }
                    </SwiperComponent>
                </div>
            </div>
        </div>
    )
}
