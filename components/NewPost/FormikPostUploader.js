import { View, Image, TextInput,Text, Button } from 'react-native';
import React, { useState } from 'react';
import { Divider } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import validUrl from 'valid-url';

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit.')
})

const Placeholder_IMG = 'https://cdn-icons.flaticon.com/png/128/4904/premium/4904233.png?token=exp=1643253347~hmac=fb4368c63abb0ad821c75d11f64c5ad9';
const FormikPostUploader = ({navigation}) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(Placeholder_IMG);
    return (
        <Formik initialValues={{ caption: '', imageUrl: '' }}
            onSubmit={(values) => {
                navigation.goBack()
            }}
            validateOnMount={true}
            validationSchema={uploadPostSchema}
        >
            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
                <>
                    <View style={{
                        margin: 20,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}>
                        <Image
                            source={{ uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : Placeholder_IMG }}
                            style={{ width: 100, height: 100 }}
                        />

                        <View style={{
                            flex: 1,
                            marginLeft: 12
                        }}>
                            <TextInput
                                style={{ color: 'white', fontSize: 20 }}
                                placeholder='Enter a caption...'
                                placeholderTextColor='gray'
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </View>
                    </View>
                    <Divider width={0.2} orientation='vertical' />
                    <TextInput
                        onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
                        style={{ color: 'white', fontSize: 10, marginBottom: 20 }}
                        placeholder='Enter a Image Url'
                        placeholderTextColor='gray'
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    />

                    {errors.imageUrl && (
                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.imageUrl}</Text>
                    )}
                    <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
                </>
            )}
        </Formik>
    );
};

export default FormikPostUploader;
