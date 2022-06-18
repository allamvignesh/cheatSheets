from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# driver set-up
driver = webdriver.Firefox()

# get the link
driver.get("https://dev.to")

# get title
print(driver.title)

# search for search bar
search = driver.find_element(by=By.NAME, value="q")

# clear text feild, type text and send Keys
search.clear()
search.send_keys("Selenium")
search.send_keys(Keys.RETURN)

# wait for results to load
time.sleep(2)

# get all the substories for the search term
stories = driver.find_elements(By.TAG_NAME, value="article")
for story in stories:
    header = story.find_element(By.TAG_NAME, value="h3")
    print(header.text)

driver.back()

# click on link
link = driver.find_element(By.LINK_TEXT, "Latest")
link.click()

time.sleep(2)

latestPost = driver.find_element(By.CLASS_NAME, value="crayons-story--featured")
header = latestPost.find_element(By.TAG_NAME, value="h2")
print("\nLatest Post:", header.text)

# driver.close()