import React from 'react';
class Footer extends React.Component{
    render(){
        return(
            <footer class="footer">
                <div class="container-fluid">
                    <nav class="pull-left">
                        <ul>

                            <li>
                                <a href="#">
                                    driveScan
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Licenses
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div class="copyright pull-right">
                        &copy;
                        <script>document.write(new Date().getFullYear())</script>,
                        by <a href="#">driveScan</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer; 
