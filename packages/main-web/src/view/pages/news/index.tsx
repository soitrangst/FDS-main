import * as React from 'react';

import hero_mini from "@assets/img/hero_mini.svg"
import { Link } from 'react-router-dom';
import { Url } from '@service/infastructural/constant';

const News: React.FC = () => {
    return (
        <>
            <div className="bg-light">
                <div className="page-hero-section bg-image hero-mini" style={{ backgroundImage: `url(${hero_mini})` }}>
                    <div className="hero-caption">
                        <div className="container fg-white h-100">
                            <div className="row justify-content-center align-items-center text-center h-100">
                                <div className="col-lg-6">
                                    <h3 className="mb-3 fw-medium">What&rsquo;s New</h3>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-dark justify-content-center bg-transparent">
                                            <li className="breadcrumb-item"><Link to={Url.home} >Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Updates</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="card-page">
                                    <h3 className="mb-3">Mobster 10.0.3</h3>
                                    <p>iOS 10.0.3 includes improvements, bug fixes and additional parental controls for Screen Time.</p>
                                    <h5>Screen Time</h5>
                                    <ul className="theme-list">
                                        <li className="list-item">New parental controls provide more communication limits over who their children can call, FaceTime, or Message</li>
                                        <li className="list-item">Contact list for children lets parents manage the contacts that appear on their children’s devices</li>
                                    </ul>
                                    <h5>Apple News</h5>
                                    <ul className="theme-list">
                                        <li className="list-item">New layout for Apple News+ stories from The Wall Street Journal and other leading newspapers</li>
                                        <li className="list-item">Easily like or dislike stories with a tap</li>
                                    </ul>
                                    <h5>Stocks</h5>
                                    <ul className="theme-list">
                                        <li className="list-item">Stories from Apple News are now available in Canada in English and French</li>
                                        <li className="list-item">Continue reading with links to related stories or more stories from the same publication</li>
                                        <li className="list-item">“Breaking” and “Developing” labels for Top Stories</li>
                                    </ul>
                                    <p>This update also includes bug fixes and other improvements. This update:</p>
                                    <ul className="theme-list">
                                        <li className="list-item">Enables the creation of a new video clip when trimming a video in Photos</li>
                                        <li className="list-item">Adds support for NFC, USB, and Lightning FIDO2-compliant security keys in Safari</li>
                                        <li className="list-item">Fixes issues in Mail that may prevent downloading new messages</li>
                                        <li className="list-item">Addresses an issue that prevented deleting messages in Gmail accounts</li>
                                        <li className="list-item">Resolves issues that could cause incorrect characters to display in messages and duplication of sent messages in Exchange accounts</li>
                                        <li className="list-item">Fixes an issue where the cursor may not move after long pressing on the space bar</li>
                                        <li className="list-item">Addresses an issue that may cause screenshots to appear blurry when sent via Messages</li>
                                        <li className="list-item">Resolves an issue where cropping or using Markup on screenshots may not save to Photos</li>
                                        <li className="list-item">Fixes an issue where Voice Memos recordings may not be able to be shared with other audio apps</li>
                                        <li className="list-item">Addresses an issue where the missed call badge on the Phone app may not clear</li>
                                        <li className="list-item">Resolves an issue where the Cellular Data setting may incorrectly show as off</li>
                                        <li className="list-item">Fixes an issue that prevented turning off Dark Mode when Smart Invert was enabled</li>
                                        <li className="list-item">Addresses an issue where some wireless chargers may charge more slowly than expected</li>
                                    </ul>
                                    <p>For information on the security content of Apple software updates, please visit this website: <a href="https://support.apple.com/kb/HT201222 ">https://support.apple.com/kb/HT201222</a></p>
                                </div>
                                <div className="card-page mt-3">
                                    <h3 className="mb-3">Mobster 10.0.2</h3>
                                    <p>Mobster 10.0.2 includes bug fixes and improvements for your iPhone. This update:</p>
                                    <ul className="theme-list">
                                        <li className="list-item">Fixes an issue where system search and search within Mail, Files, and Notes might not work</li>
                                        <li className="list-item">Addresses an issue where photos, links, and other attachments might not display in the Messages details view</li>
                                        <li className="list-item">Fixes an issue that could prevent apps from downloading content in the background</li>
                                        <li className="list-item">Resolves issues that may prevent Mail from fetching new messages, and fail to include and quote original message content in Exchange accounts</li>
                                    </ul>
                                    <p>For information on the security content of Apple software updates, please visit this website:&nbsp;<a href="https://support.apple.com/kb/HT201222">https://support.apple.com/kb/HT201222</a>&nbsp;</p>
                                </div>
                                <div className="card-page mt-3">
                                    <h3>Mobster 10.0.1</h3>
                                    <p>iOS 10.0.1 includes bug fixes and improvements for your iPhone. This update:</p>
                                    <ul className="theme-list">
                                        <li className="list-item">Fixes an issue that could cause apps to quit unexpectedly when running in the background</li>
                                        <li className="list-item">Resolves an issue where iPhone may temporarily lose cellular service after a call</li>
                                        <li className="list-item">Addresses an issue where cellular data may temporarily not be available</li>
                                        <li className="list-item">Fixes an issue that caused replies to S/MIME encrypted email messages between Exchange accounts to be unreadable</li>
                                        <li className="list-item">Addresses an issue where using Kerberos single sign-on service in Safari may present an authentication prompt</li>
                                        <li className="list-item">Resolves an issue where charging may be interrupted on Yubikey Lightning-powered accessories</li>
                                    </ul>
                                    <p>For information on the security content of Apple software updates, please visit this website:&nbsp;<a href="https://support.apple.com/kb/HT201222">https://support.apple.com/kb/HT201222</a>&nbsp;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default News;