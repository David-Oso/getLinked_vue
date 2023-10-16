<template>
    <div class="bg-deep-dark-purple h-screen">
        <div class="flex flex-row pb-20 h-screen">
            <div class="w-2/6 ml-24 mr-10">
                <img src="../assets/png/3d-graphic-designer-showing-thumbs-up-png 1.png" alt="3-d graphic designer" class="h-5/6">
            </div>
            <div class="text-white bg-[#1e1732]  p-10 rounded-xl w-1/2">
                <div class="h-full">
                    <h2 class="text-light-purple">Register</h2>
                    <p>Be part of this moment!</p>
                    <h2 class="">CREATE YOUR ACCOUNT</h2>
                    <div class="bg-transparent">
                        <!-- <div>
                            <label for="name">Team's Name</label>
                            <input type="text" placeholder="Enter the name of your group"/>

                            <label for="phone">Phone</label>
                            <input type="text" placeholder="Enter your phone number"/>
                        </div>

                        <div>
                            <label for="email">Email</label>
                            <input type="text" placeholder="Enter your email address"/>

                            <label for="projectTopic">ProjectTopic</label>
                            <input type="text" placeholder="Enter is your project topic"/>
                        </div>

                        <div>
                            <label for="Category">Category</label>                    
                            <select name="category" id="category">
                                <option value="general">General Inquiry</option>
                                <option value="support">Customer Support</option>
                                <option value="feedback">Feedback</option>                    
                            </select>
                            
                            <label for="Group Size">Group Size</label>                    
                            <select name="category" id="category">
                                <option value="general">General Inquiry</option>
                                <option value="support">Customer Support</option>
                                <option value="feedback">Feedback</option>                    
                            </select>
                        </div> -->
                        <div>
                            <label for="Team's Name">Team's Name</label>
                            <input type="text" placeholder="Enter the name of your group">

                            <label>Email</label>
                            <input type="text" placeholder="Enter your email address">

                            <label for="Category">Category</label>                    
                            <select name="category" id="category">
                                <option value="general">General Inquiry</option>
                                <option value="support">Customer Support</option>
                                <option value="feedback">Feedback</option>                    
                            </select>
                        </div>

                        <div>
                            <label>Phone</label>
                            <input type="text" placeholder="Enter your phone number">

                            <label>Project Topic</label>
                            <input type="text" placeholder="What is your group project topic">


                            <label for="Group Size">Group Size</label>                    
                            <select name="category" id="category">
                                <option value="general">General Inquiry</option>
                                <option value="support">Customer Support</option>
                                <option value="feedback">Feedback</option>                    
                            </select>
                        </div>

                        <p class="text-primary-colour">Please review your registration details before submitting</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default{
    name: 'RegisterPage',
} 

</script>