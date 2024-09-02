import React from 'react'
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import StatisticsBoxes from '@/components/statisticsboxes/StatisticsBoxes';
import "./Statistics.css"
// import Blogs from '../blogs/Blogs';
// import ApexChart from "../apexchart/ApexChart"
import Image from 'next/image';

const Statistics = () => {

    return (
        <>
            <BreadCrumb />
            <section className='wpa-wrapper-sides-spacing'>
                <div className='wpa-h1-font-size wpa-font-weight-700 wpa-p-text wpa-blogs-descriptions margin-bottom-0 wpa-pro-services-content'>
                    <h1>WPArena Statistics</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tookgalley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                </div>
            </section>
            <StatisticsBoxes />
            <div className='wpa-dark-heading wpa-h4-font-size wpa-wrapper-sides-spacing'>
                <h4>MOST VISITED BLOGS</h4>
            </div>
            <div className='wpa-blogs wpa-most-visited-blogs-stats'>
                {/* <Blogs /> */}
            </div>
            <section>
                <div className="wpa-quiz-banner wpa-no-bg wpa-wrapper-sides-spacing wpa-content-top-bottom-spacing-30">
                    <div className="wpa-flex wpa-gap-xxl">

                        <div className="wpa-quiz-content wpa-h2-font-size wpa-paragraph-text btn-dark btn-primary-hover wpa-content-top-bottom-spacing wpa-font-weight-600">
                            <h2>How Many Websites Are There?</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.</p>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                            <ul>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li>It is a long established fact that a reader will be distracted by the readable content of a page.</li>
                                <li>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</li>
                                <li>There are many variations of passages of Lorem Ipsum available, but the majority have humour.</li>
                            </ul>
                            <button type="button" fdprocessedid="k9va2o">LEARN MORE</button>
                        </div>
                        <div className="wpa-chart-400">
                            {/* <ApexChart
                                title="Blogs"
                                subtitle=""
                                seriesData={[{ name: 'Blogs', data: [0, 300, 330, 230, 350, 350, 250, 250] }]}
                                categories={['10', '15', '20', '25', '30', '35', '40', '45']}
                                yAxisMin={0}
                                yAxisMax={400}

                            /> */}
                        </div>

                    </div>
                    <div className="wpa-chart-100">
                        <div className='wpa-h3-font-size border-botom wpa-font-weight-700 wpa-flex wpa-space-between wpa-charts-content-area'><h3>Action Lorem Ipusm</h3>
                        <div className='wpa-select'>
                            <select>
                                <option>Last Year 2024</option>
                                <option>Last Year 2023</option>
                                <option>Last Year 2022</option>
                                <option>Last Year 2021</option>
                            </select>
                        </div>
                        </div>
                        {/* <ApexChart
                            title="Blogs and Articles"
                            subtitle="68"
                            seriesData={[
                                { name: 'Blogs', data: [10, 8, 4, 3, 2, 4, 20, 10, 9, 12, 14, 28] },
                                { name: 'Articles', data: [18, 12, 7, 8, 3, 18, 12, 10, 14, 12, 19, 12] }
                            ]}
                            categories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                            yAxisMin={0}
                            yAxisMax={30}
                            showHeading="false"
                        /> */}
                    </div>
                </div>
            </section>
        </>

    )
}

export default Statistics
