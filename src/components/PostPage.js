import React, { useEffect, useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { GET_POST_BY_SLUG, GET_PAGE_BY_SLUG } from '.././queries';
import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './wordpress-style.css'
import "../App.css";
import { API_BASE_URL } from '../apiConfig';

function PostPage() {
    const { slug } = useParams();
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { data: postData, loading: postLoading, error: postError } = useQuery(GET_POST_BY_SLUG, {
        variables: { slug },
        skip: !slug, // Skip if slug is not available
    });

    const [fetchPage, { data: pageData, loading: pageLoading, error: pageError }] = useLazyQuery(GET_PAGE_BY_SLUG, {
        variables: { slug },
    });

    useEffect(() => {
        if (postData?.postBy) {
            setContent(postData.postBy);
            setLoading(false);
        } else if (!postLoading && !postData?.postBy) {
            // If post is not found, try fetching the page
            fetchPage();
        }
    }, [postData, postLoading, fetchPage]);

    useEffect(() => {
        if (pageData?.pageBy) {
            setContent(pageData.pageBy);
            setLoading(false);
        } else if (pageError) {
            setError("Content not found");
            setLoading(false);
        }
    }, [pageData, pageError]);

    if (loading || postLoading || pageLoading) {
        return (
            <div className="wpa-loader-main">
                <div className="wpa-loader"></div>
            </div>
        );
    }

    if (error || postError || pageError) {
        return <p className='wpa-error'>Error fetching content: {error || postError?.message || pageError?.message}</p>;
    }

    if (!content) {
        return <p className='wpa-error'>Content not found</p>;
    }

    return (
        <>
            <BreadCrumb />
            <div className='wpa-custom-style'>
                <div className='wpa-custom-blog-detail wpa-content-top-bottom-spacing-30'>
                    <div className='wpa-wrapper-sides-spacing'>
                        <h1>{content.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: content.content }} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostPage