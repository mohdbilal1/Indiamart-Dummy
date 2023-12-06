import { Box, Typography } from "@mui/material"


const Features = () => {
    return (
        <>
            <Box>
                <Typography className=" fw-bold" sx={{ fontSize: '30px', textAlign: 'center', p: '20px 0' }}>Features</Typography>
                <div className=" d-flex">
                    <div className=" col-sm-5 p-5 me-4 ms-2 ">
                        <h2 className=" fw-bold pt-5">Access Tally Data On Web & Mobile</h2>
                        <p style={{ letterSpacing: 1, fontSize: '18px',marginTop:'15px' }}>Livekeeping allows you to access your Tally accounting data 24*7 anytime anywhere on mobile and web.</p>
                    </div>
                    <div className=" col-sm-6 ms-5">
                        <img style={{ width: '600px' }} src="https://www.livekeeping.com/assets/web_images/new-banner-image.svg" alt="img" />
                    </div>
                </div>

                <div className=" d-flex">
                    <div className=" col-sm-5 ms-5 ">
                        <img style={{ width: '500px' }} src="https://www.livekeeping.com/assets/web_images/Payment-Reminder.svg" alt="img" />
                    </div>
                    <div className=" col-sm-6 p-5 mt-5 ms-5">
                        <h2 className=" fw-bold pt-5">Send Payment Reminders to Recover Dues</h2>
                        <p style={{ letterSpacing: 1, fontSize: '18px',marginTop:'15px' }}>Automate payment reminders via <strong>SMS & email</strong> to prompt parties for delayed payments, improve cash flow up to <strong>5x</strong>.</p>
                    </div>
                </div>

                <div className=" d-flex">
                    <div className=" col-sm-5 p-5 me-4 ms-2" style={{marginTop:"100px"}}>
                        <h2 className=" fw-bold pt-5">We provide Tally data backup</h2>
                        <p style={{ letterSpacing: 1, fontSize: '18px',marginTop:'15px' }}>Be ready with back up for your Tally. Never loose any data in case of migration or system crash.</p>
                    </div>
                    <div className=" col-sm-6 ms-5">
                        <img style={{ width: '600px' }} src="https://www.livekeeping.com/assets/web_images/Data-Backup.svg" alt="img" />
                    </div>
                </div>

                <div className=" d-flex">
                    <div className=" col-sm-5 ms-5 ">
                        <img style={{ width: '500px' }} src='https://www.livekeeping.com/assets/web_images/Create-Entries.svg' alt="img" />
                    </div>
                    <div className=" col-sm-6 p-5 mt-5 ms-5">
                        <h2 className=" fw-bold pt-5">Create GST Bills for customers and share them online</h2>
                        <p style={{ letterSpacing: 1, fontSize: '18px',marginTop:'15px' }}>Generate sales invoices, sync with Tally, and share instantly via Whatsapp, Email and other channels to save time and reduce errors.</p>
                    </div>
                </div>

                <div className=" d-flex">
                    <div className=" col-sm-5 p-5 me-4 ms-2" style={{marginTop:"100px"}}>
                        <h2 className=" fw-bold pt-5">View Daily Books, View Expense Tracking, Balance Sheet</h2>
                        <p style={{ letterSpacing: 1, fontSize: '18px',marginTop:'15px' }}>Analyse your Daily Business performance, with different financial reports. Make smart data driven decision.</p>
                    </div>
                    <div className=" col-sm-6 ms-5">
                        <img style={{ width: '600px' }} src="https://www.livekeeping.com/assets/web_images/View-Reports.svg" alt="img" />
                    </div>
                </div>
            </Box>
        </>
    )
}

export default Features
