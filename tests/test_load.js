const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto('http://localhost:8020');
    await page.waitForTimeout(1000);
    
    // Set localStorage as if user completed module 1 and is on module 2
    await page.evaluate(() => {
        localStorage.setItem('guia-ia-general', JSON.stringify({
            completed: ['module-1'],
            currentModule: 'module-2',
            quizScores: {},
            xp: 150,
            level: 2,
            competencies: {},
            evidenceStore: {},
            selfAssessments: {},
            theme: 'dark'
        }));
    });
    
    // Reload to see if it loads module-2
    await page.reload();
    await page.waitForTimeout(2000);
    
    const activeModules = await page.evaluate(() => {
        const modules = Array.from(document.querySelectorAll('.module.active'));
        return modules.map(m => m.id);
    });
    
    console.log('Active modules after reload with saved progress:', activeModules);
    
    await browser.close();
})();
