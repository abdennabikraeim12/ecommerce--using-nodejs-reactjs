import { Link } from "react-router-dom"

const LayOut = ()=>{
    return (
        <>
        <ul className="breadcrumb">
        <li><Link to="#">Home</Link></li>                    
        <li className="active">Dashboard</li>
      </ul>
   
      <div className="page-content-wrap">
        {/* START WIDGETS */}                    
        <div className="row">
          <div className="col-md-3">
            {/* START WIDGET SLIDER */}
            <div className="widget widget-default widget-carousel">
              <div className="owl-carousel" id="owl-example">
                <div>                                    
                  <div className="widget-title">Total Visitors</div>                                                                        
                  <div className="widget-subtitle">27/08/2014 15:23</div>
                  <div className="widget-int">3,548</div>
                </div>
                <div>                                    
                  <div className="widget-title">Returned</div>
                  <div className="widget-subtitle">Visitors</div>
                  <div className="widget-int">1,695</div>
                </div>
                <div>                                    
                  <div className="widget-title">New</div>
                  <div className="widget-subtitle">Visitors</div>
                  <div className="widget-int">1,977</div>
                </div>
              </div>                            
              <div className="widget-controls">                                
                <Link to="#" className="widget-control-right widget-remove" data-toggle="tooltip" data-placement="top" title="Remove Widget"><span className="fa fa-times" /></Link>
              </div>                             
            </div>         
            {/* END WIDGET SLIDER */}
          </div>
          <div className="col-md-3">
            {/* START WIDGET MESSAGES */}
            <div className="widget widget-default widget-item-icon" onclick="location.to='pages-messages.html';">
              <div className="widget-item-left">
                <span className="fa fa-envelope" />
              </div>                             
              <div className="widget-data">
                <div className="widget-int num-count">48</div>
                <div className="widget-title">New messages</div>
                <div className="widget-subtitle">In your mailbox</div>
              </div>      
              <div className="widget-controls">                                
                <Link to="#" className="widget-control-right widget-remove" data-toggle="tooltip" data-placement="top" title="Remove Widget"><span className="fa fa-times" /></Link>
              </div>
            </div>                            
            {/* END WIDGET MESSAGES */}
          </div>
          <div className="col-md-3">
            {/* START WIDGET REGISTRED */}
            <div className="widget widget-default widget-item-icon" onclick="location.to='pages-address-book.html';">
              <div className="widget-item-left">
                <span className="fa fa-user" />
              </div>
              <div className="widget-data">
                <div className="widget-int num-count">375</div>
                <div className="widget-title">Registred users</div>
                <div className="widget-subtitle">On your website</div>
              </div>
              <div className="widget-controls">                                
                <Link to="#" className="widget-control-right widget-remove" data-toggle="tooltip" data-placement="top" title="Remove Widget"><span className="fa fa-times" /></Link>
              </div>                            
            </div>                            
            {/* END WIDGET REGISTRED */}
          </div>
          <div className="col-md-3">
            {/* START WIDGET CLOCK */}
            <div className="widget widget-info widget-padding-sm">
              <div className="widget-big-int plugin-clock">00:00</div>                            
              <div className="widget-subtitle plugin-date">Loading...</div>
              <div className="widget-controls">                                
                <Link to="#" className="widget-control-right widget-remove" data-toggle="tooltip" data-placement="left" title="Remove Widget"><span className="fa fa-times" /></Link>
              </div>                            
              <div className="widget-buttons widget-c3">
                <div className="col">
                  <Link to="#"><span className="fa fa-clock-o" /></Link>
                </div>
                <div className="col">
                  <Link to="#"><span className="fa fa-bell" /></Link>
                </div>
                <div className="col">
                  <Link to="#"><span className="fa fa-calendar" /></Link>
                </div>
              </div>                            
            </div>                        
            {/* END WIDGET CLOCK */}
          </div>
        </div>
        {/* END WIDGETS */}                    
        <div className="row">
          <div className="col-md-4">
            {/* START USERS ACTIVITY BLOCK */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title-box">
                  <h3>Users Activity</h3>
                  <span>Users vs returning</span>
                </div>                                    
                <ul className="panel-controls" style={{marginTop: 2}}>
                  <li><Link to="#" className="panel-fullscreen"><span className="fa fa-expand" /></Link></li>
                  <li><Link to="#" className="panel-refresh"><span className="fa fa-refresh" /></Link></li>
                  <li className="dropdown">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown"><span className="fa fa-cog" /></Link>                                        
                    <ul className="dropdown-menu">
                      <li><Link to="#" className="panel-collapse"><span className="fa fa-angle-down" /> Collapse</Link></li>
                      <li><Link to="#" className="panel-remove"><span className="fa fa-times" /> Remove</Link></li>
                    </ul>                                        
                  </li>                                        
                </ul>                                    
              </div>                                
              <div className="panel-body padding-0">
                <div className="chart-holder" id="dashboard-bar-1" style={{height: 200}} />
              </div>                                    
            </div>
            {/* END USERS ACTIVITY BLOCK */}
          </div>
          <div className="col-md-4">
            {/* START VISITORS BLOCK */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title-box">
                  <h3>Visitors</h3>
                  <span>Visitors (last month)</span>
                </div>
                <ul className="panel-controls" style={{marginTop: 2}}>
                  <li><Link to="#" className="panel-fullscreen"><span className="fa fa-expand" /></Link></li>
                  <li><Link to="#" className="panel-refresh"><span className="fa fa-refresh" /></Link></li>
                  <li className="dropdown">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown"><span className="fa fa-cog" /></Link>                                        
                    <ul className="dropdown-menu">
                      <li><Link to="#" className="panel-collapse"><span className="fa fa-angle-down" /> Collapse</Link></li>
                      <li><Link to="#" className="panel-remove"><span className="fa fa-times" /> Remove</Link></li>
                    </ul>                                        
                  </li>                                        
                </ul>
              </div>
              <div className="panel-body padding-0">
                <div className="chart-holder" id="dashboard-donut-1" style={{height: 200}} />
              </div>
            </div>
            {/* END VISITORS BLOCK */}
          </div>
          <div className="col-md-4">
            {/* START PROJECTS BLOCK */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title-box">
                  <h3>Projects</h3>
                  <span>Projects activity</span>
                </div>                                    
                <ul className="panel-controls" style={{marginTop: 2}}>
                  <li><Link to="#" className="panel-fullscreen"><span className="fa fa-expand" /></Link></li>
                  <li><Link to="#" className="panel-refresh"><span className="fa fa-refresh" /></Link></li>
                  <li className="dropdown">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown"><span className="fa fa-cog" /></Link>                                        
                    <ul className="dropdown-menu">
                      <li><Link to="#" className="panel-collapse"><span className="fa fa-angle-down" /> Collapse</Link></li>
                      <li><Link to="#" className="panel-remove"><span className="fa fa-times" /> Remove</Link></li>
                    </ul>                                        
                  </li>                                        
                </ul>
              </div>
              <div className="panel-body panel-body-table">
                <div className="table-responsive">
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th width="50%">Project</th>
                        <th width="20%">Status</th>
                        <th width="30%">Activity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Joli Admin</strong></td>
                        <td><span className="label label-danger">Developing</span></td>
                        <td>
                          <div className="progress progress-small progress-striped active">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>85%</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>Gemini</strong></td>
                        <td><span className="label label-warning">Updating</span></td>
                        <td>
                          <div className="progress progress-small progress-striped active">
                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>40%</div>
                          </div>
                        </td>
                      </tr>                                                
                      <tr>
                        <td><strong>Taurus</strong></td>
                        <td><span className="label label-warning">Updating</span></td>
                        <td>
                          <div className="progress progress-small progress-striped active">
                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '72%'}}>72%</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>Leo</strong></td>
                        <td><span className="label label-success">Support</span></td>
                        <td>
                          <div className="progress progress-small progress-striped active">
                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>100%</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>Virgo</strong></td>
                        <td><span className="label label-success">Support</span></td>
                        <td>
                          <div className="progress progress-small progress-striped active">
                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>100%</div>
                          </div>
                        </td>
                      </tr>                                                
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* END PROJECTS BLOCK */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            {/* START SALES BLOCK */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title-box">
                  <h3>Sales</h3>
                  <span>Sales activity by period you selected</span>
                </div>                                     
                <ul className="panel-controls panel-controls-title">                                        
                  <li>
                    <div id="reportrange" className="dtrange">                                            
                      <span /><b className="caret" />
                    </div>                                     
                  </li>                                
                  <li><Link to="#" className="panel-fullscreen rounded"><span className="fa fa-expand" /></Link></li>
                </ul>                                    
              </div>
              <div className="panel-body">                                    
                <div className="row stacked">
                  <div className="col-md-4">                                            
                    <div className="progress-list">                                               
                      <div className="pull-left"><strong>In Queue</strong></div>
                      <div className="pull-right">75%</div>                                                
                      <div className="progress progress-small progress-striped active">
                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>75%</div>
                      </div>
                    </div>
                    <div className="progress-list">                                               
                      <div className="pull-left"><strong>Shipped Products</strong></div>
                      <div className="pull-right">450/500</div>                                                
                      <div className="progress progress-small progress-striped active">
                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>90%</div>
                      </div>
                    </div>
                    <div className="progress-list">                                               
                      <div className="pull-left"><strong className="text-danger">Returned Products</strong></div>
                      <div className="pull-right">25/500</div>                                                
                      <div className="progress progress-small progress-striped active">
                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '5%'}}>5%</div>
                      </div>
                    </div>
                    <div className="progress-list">                                               
                      <div className="pull-left"><strong className="text-warning">Progress Today</strong></div>
                      <div className="pull-right">75/150</div>                                                
                      <div className="progress progress-small progress-striped active">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>50%</div>
                      </div>
                    </div>
                    <p><span className="fa fa-warning" /> Data update in end of each hour. You can update it manual by pressign update button</p>
                  </div>
                  <div className="col-md-8">
                    <div id="dashboard-map-seles" style={{width: '100%', height: 200}} />
                  </div>
                </div>                                    
              </div>
            </div>
            {/* END SALES BLOCK */}
          </div>
          <div className="common-modal modal fade" id="common-Modal1" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-content">
              <ul className="list-inline item-details">
                <li><Link to="http://themifycloud.com/downloads/janux-premium-responsive-bootstrap-admin-dashboard-template/">Admin templates</Link></li>
                <li><Link to="http://themescloud.org">Bootstrap themes</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            {/* START SALES & EVENTS BLOCK */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title-box">
                  <h3>Sales &amp; Event</h3>
                  <span>Event "Purchase Button"</span>
                </div>
                <ul className="panel-controls" style={{marginTop: 2}}>
                  <li><Link to="#" className="panel-fullscreen"><span className="fa fa-expand" /></Link></li>
                  <li><Link to="#" className="panel-refresh"><span className="fa fa-refresh" /></Link></li>
                  <li className="dropdown">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown"><span className="fa fa-cog" /></Link>                                        
                    <ul className="dropdown-menu">
                      <li><Link to="#" className="panel-collapse"><span className="fa fa-angle-down" /> Collapse</Link></li>
                      <li><Link to="#" className="panel-remove"><span className="fa fa-times" /> Remove</Link></li>
                    </ul>                                        
                  </li>                                        
                </ul>
              </div>
              <div className="panel-body padding-0">
                <div className="chart-holder" id="dashboard-line-1" style={{height: 200}} />
              </div>
            </div>
            {/* END SALES & EVENTS BLOCK */}
          </div>
        </div>
        {/* START DASHBOARD CHART */}
        <div className="chart-holder" id="dashboard-area-1" style={{height: 200}} />
        <div className="block-full-width">
        </div>                    
        {/* END DASHBOARD CHART */}
      </div>
        
        
        
        </>
    )
}

export default LayOut