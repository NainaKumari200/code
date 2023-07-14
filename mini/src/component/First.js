import React from 'react';
import './first.css';
// import records from './Record.json';

function First() {
    return (
        <>
            <div className="main">
                <div className="first">

                    <div className="mir">
                        <div><i className="fa fa-th-large mar" aria-hidden="true"></i></div>
                        <div className="con">  Dashboard </div>
                    </div>
                    <div className="mir">
                        <div><i className="fa fa-calendar-minus-o mar" aria-hidden="true"></i></div>
                        <div className="con"> Calendar</div>
                    </div>
                    <div className="mir">
                        <div><i className="fa fa-home mar" aria-hidden="true"></i></div>
                        <div className="con">planner</div>
                    </div>
                    <div className="mir">
                        <div><i className="fa fa-users mar" aria-hidden="true"></i></div>
                        <div className="con">Team</div>
                    </div>
                    <div className="mir">
                        <div><i className="fa fa-clone mar" aria-hidden="true"></i></div>
                        < div className="con"> Board</div>
                    </div>
                    <div className="mir">
                        <div><i className="fa fa-file-text-o mar" aria-hidden="true"></i></div>
                        <div className="con"> Personal board</div>
                    </div>
                    <div className="mir">
                        <div><i className="fa fa-line-chart mar" aria-hidden="true"></i></div>
                        <div className="con">Data</div>
                    </div>
                    <div className="mir">
                        <div><i className="fa fa-file-code-o mar" aria-hidden="true"></i></div>
                        <div className="con">Deliverables</div>
                    </div>
                    <div className="mir">
                        <div><i className="fa fa-cog mar" aria-hidden="true"></i></div>
                        <div className="con">Setting</div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="out"> Sign Out</div>
                </div>
                <div className="second">
                    <div className="head">
                        <div className="hello">Hello,Yogi!</div>
                        <div className="wish">Good Afternoon</div>
                    </div>
                    <div className="card">
                        <div className="full">
                            <div className="vold">Ongoing Projects</div>
                            <div className="dis">
                                <div className="one">
                                    <div className="plus"> <h5>Aishwarya & Jay</h5></div>
                                    <div className="plus"><p>Haldi ceremony photoshot sama savli,Vadodara</p></div>
                                    <div className="plus"><p>Assigned To: Ayesha ceremony photoshot sama savli,Vadodara</p></div>
                                    <div>
                                        <div className="ca">
                                            <div ><i className="fa fa-clock-o" aria-hidden="true"></i></div>
                                            <div className="time">
                                                08-06-2023, 10:30 AM</div></div>
                                    </div>
                                    <div className="cent">
                                        <button type="button" className="btn btn-success">In Process</button>
                                    </div>
                                </div>
                                <div className="two">
                                    <div className="plus"> <h5>Harshangi & Jay</h5></div>
                                    <div className="plus"><p>Haldi ceremony photoshot sama savli,Vadodara</p></div>
                                    <div className="plus"><p>Assigned To: Ayesha ceremony photoshot sama savli,Vadodara</p></div>
                                    <div>
                                        <div className="ca">
                                            <div><i className="fa fa-clock-o" aria-hidden="true"></i></div>
                                            <div className="time">
                                                08-06-2023, 10:30 AM</div></div>
                                    </div>
                                    <div className="cent">
                                        <button type="button" className="btn btn-danger">DUO</button>
                                    </div>
                                </div>
                                <div className="three">
                                    <div className="plus"> <h5>Swati & Jay</h5></div>
                                    <div className="plus"><p>Haldi ceremony photoshot sama savli,Vadodara</p></div>
                                    <div className="plus"><p>Assigned To: Ayesha ceremony photoshot sama savli,Vadodara</p></div>
                                    <div>
                                        <div className="ca">
                                            <div><i className="fa fa-clock-o" aria-hidden="true"></i></div>
                                            <div className="time">

                                                08-06-2023, 10:30 AM</div></div>
                                    </div>
                                    <div className="cent"><button type="button" className="btn btn-primary">Completed</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cap">
                        <div className="sideone">
                            <div className="totask"><div className="task">My Tasks</div><div className="num">(05)</div></div>
                            <div className="c1">01 Social Media Post</div>
                            <div className="c2"> <div className="cc1">02 Video Editing</div> <div className="tick">
                                <i className="fa fa-check-circle" ></i></div></div>
                            <div className="c1">03 Jilesh-Sneha Meeting</div>
                            <div className="c1">04 Aditiya Graphic Design Interview</div>
                            <div className="c1">05 Camera Shopping</div>
                        </div>
                        <div className="sidetwo">
                            <div className="totask2"> <div className="mes">Message Notificatrion</div></div>
                            {/* <div>
                            {
                                        Record && Record.map(records => {
                                            return(
                                                <div key={records.id}>

                                                <div className="mainn">
                                                    
                                                <div className="left">
                                                    left
                                                </div>
                                                <div className="right">
                                                right
                                                </div>

                                                 </div>

                                                 </div>

                                            )

                                        
                                        } )
                                    }

                            </div> */}
                              <div className="num1">
                                <div className="photot">
                                    <div className="pic">Photo</div>
                                <div className="param">Ayesha Shergill <br /><div className="para">Edited files mailed to mrs. Naina patel</div></div>
                                </div>

                            </div>
                            <div className="num1">
                            <div className="photot">
                                    <div className="pic">Photo</div>
                                <div className="param">Ayesha Shergill <br /><div className="para">Edited files mailed to mrs. Naina patel</div></div>
                                </div>
                            </div>
                            <div className="num1">
                            <div className="photot">
                                    <div className="pic">Photo</div>
                                <div className="param">Ayesha Shergill <br /><div className="para">Edited files mailed to mrs. Naina patel</div></div>
                                </div>
                            </div>
                        </div> 
        
        
                    </div>
                </div>
                <div className="Third">
                    <div className="third1">
                        <div className="wrapper">
                            <div className="searchBar">
                                <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" value="" />
                                <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
                                    <svg viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="third2">
                        <div className="up">
                            <div class="month">
                                <ul>
                                    <li class="prev">&#10094;</li>
                                    <li class="next">&#10095;</li>
                                    <li>July<br />2023</li>
                                </ul>
                            </div>

                            <ul class="weekdays">
                                <li>Mo</li>
                                <li>Tu</li>
                                <li>We</li>
                                <li>Th</li>
                                <li>Fr</li>
                                <li>Sa</li>
                                <li>Su</li>
                            </ul>

                            <ul class="days">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li><span class="active">10</span></li>
                                <li>11</li>
                                <li>12</li>
                                <li>13</li>
                                <li>14</li>
                                <li>15</li>
                                <li>16</li>
                                <li>17</li>
                                <li>18</li>
                                <li>19</li>
                                <li>20</li>
                                <li>21</li>
                                <li>22</li>
                                <li>23</li>
                                <li>24</li>
                                <li>25</li>
                                <li>26</li>
                                <li>27</li>
                                <li>28</li>
                                <li>29</li>
                                <li>30</li>
                                <li>31</li>
                            </ul>
                        </div>
                    </div>
                    <div className="third3">
                        <div className="up">
                            <div className="totask2"> <div className="mes">Upcoming Events</div></div>
                             <div>

                                 <div className="num11">
                                    <div>11-06-2023</div>
                                    <div className="chota">Ayesha & Harsh Pre-wedding </div>
                                    <div className="mota">6AM- Jaipur</div>
                        
                                </div>
                                <div className="num11">
                                    <div>11-06-2023</div>
                                    <div className="chota">Ayesha & Harsh Pre-wedding </div>
                                    <div className="mota">6AM- Jaipur</div>
                        
                                </div>
                                <div className="num11">
                                    <div>11-06-2023</div>
                                    <div className="chota">Ayesha & Harsh Pre-wedding </div>
                                    <div className="mota">6AM- Jaipur</div>
                        
                                </div>
                                 
                            </div>

                        </div>

                    </div>

                </div>
            </div >
        </>
    )
}

export default First
