
const convert_date = (date)=>{
    const date1 = new Date(`${date}`);
    const date2 = new Date();

    if(date2.getFullYear() - date1.getFullYear() !== 0) {
        let time
        let date = "year"
        if(date2.getFullYear() - date1.getFullYear() === 1) time = `${date}`;
        else time = `${date}`;
        return `${date2.getFullYear() - date1.getFullYear()} ${time} ago`;
    }

    if(date2.getMonth() - date1.getMonth() !== 0){
        let time
        let date = "month"
        if(date2.getMonth() - date1.getMonth() === 1) time = `${date}`;
        else time = `${date}`;
        return `${date2.getMonth() - date1.getMonth()} ${time} ago`;
    }

    if(date2.getDate() - date1.getDate() !== 0){
        let time
        let date = "day"
        if(date2.getDate() - date1.getDate() === 1) time = `${date}`;
        else time = `${date}`;
        return `${date2.getDate() - date1.getDate()} ${time} ago`;
    }
    if(date2.getHours() - date1.getHours() !== 0){
        let time
        let date = "hour"
        if(date2.getHours() - date1.getHours() === 1) time = `${date}`;
        else time = `${date}`;
        return `${date2.getHours() - date1.getHours()} ${time} ago`;
    }
}

// const get_date_data = (fn,date,date1,date2)=>{
//     let time
//     if(date2.fn() - date1.fn() === 1) time = `${date}`;
//     else time = `${date}`;
//     return `${date2.fn() - date1.fn()} ${time} ago`;
// }

const convert_form = (num)=>{
    if(num.length < 4) return num;
    else if((num.length - 4) % 3 === 0){
        return get_point_value(num);
    }
    else if((num.length - 5) % 3 === 0){
        let place = get_place(num.length);
        return `${num.slice(0,2)}${place}`;
    }
    else if((num.length - 6) % 3 === 0){
        let place = get_place(num.length);
        return `${num.slice(0,3)}${place}`;
    }
}

const get_point_value = (num)=>{
    let place = get_place(num.length);
    let pointer_value = num.slice(1,2);
    if(pointer_value === 0) return `${num.slice(0,1)}${place}`;
    else return `${num.slice(0,1)}.${pointer_value}${place}`;
}

const get_place = (num)=>{
    if(num <= 6) return 'k';
    else if(num <= 9) return 'M';
    else if(num > 9) return 'B';
}


export  {convert_form,convert_date};